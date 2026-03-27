const Video = require("../models/videoModel");
const User = require("../models/userModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "video") {
      cb(null, "uploads/videos/");
    } else if (file.fieldname === "thumbnail") {
      cb(null, "uploads/thumbnails/");
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: (req, file) => {
      if (file.fieldname === "video") return 100 * 1024 * 1024; // 100MB
      if (file.fieldname === "thumbnail") return 10 * 1024 * 1024; // 10MB
      return 5 * 1024 * 1024;
    }
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "video") {
      const allowedTypes = /mp4|webm|ogg|avi|mov/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);
      if (mimetype && extname) return cb(null, true);
      cb(new Error("Invalid video file type"));
    } else if (file.fieldname === "thumbnail") {
      const allowedTypes = /jpeg|jpg|png|gif|webp/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);
      if (mimetype && extname) return cb(null, true);
      cb(new Error("Invalid image file type"));
    }
  }
});

const uploadVideo = async (req, res) => {
  try {
    const { title, description, tags, category, duration } = req.body;
    const userId = req.user.id;
    
    if (!req.files || !req.files.video) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const videoFile = req.files.video[0];
    const thumbnailFile = req.files.thumbnail ? req.files.thumbnail[0] : null;

    const videoUrl = `/uploads/videos/${videoFile.filename}`;
    const thumbnailUrl = thumbnailFile ? `/uploads/thumbnails/${thumbnailFile.filename}` : "";

    const parsedTags = tags ? tags.split(",").map(tag => tag.trim()).filter(tag => tag) : [];

    const video = new Video({
      title,
      description,
      videoUrl,
      thumbnail: thumbnailUrl,
      duration: duration || "00:00",
      creator: userId,
      channelName: user.channelName,
      tags: parsedTags,
      category: category || "entertainment"
    });

    await video.save();

    user.totalVideos += 1;
    await user.save();

    res.status(201).json({
      message: "Video uploaded successfully",
      video: await Video.findById(video._id).populate('creator', 'name username channelName')
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: error.message });
  }
};

const fetchVideos = async (req, res) => {
  try {
    const { page = 1, limit = 20, category, search } = req.query;
    const skip = (page - 1) * limit;

    let query = { isPublic: true };

    if (category && category !== "all") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
        { channelName: { $regex: search, $options: 'i' } }
      ];
    }

    const videos = await Video.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('creator', 'name username channelName avatar');

    const total = await Video.countDocuments(query);

    res.status(200).json({
      videos,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalVideos: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null;

    const video = await Video.findById(id)
      .populate('creator', 'name username channelName avatar subscribers isVerified');

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    if (!video.isPublic && (!userId || !video.creator.equals(userId))) {
      return res.status(403).json({ message: "Access denied" });
    }

    await video.incrementViews();

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrendingVideos = async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const videos = await Video.getTrendingVideos(parseInt(limit));
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likeVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const user = await User.findById(userId);
    await user.likeVideo(video._id);
    await video.addLike();

    res.status(200).json({ message: "Video liked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const dislikeVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const user = await User.findById(userId);
    await user.dislikeVideo(video._id);
    await video.addDislike();

    res.status(200).json({ message: "Video disliked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserVideos = async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    const videos = await Video.find({ creator: userId, isPublic: true })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('creator', 'name username channelName');

    const total = await Video.countDocuments({ creator: userId, isPublic: true });

    res.status(200).json({
      videos,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalVideos: total
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    if (!video.creator.equals(userId)) {
      return res.status(403).json({ message: "Access denied" });
    }

    await Video.findByIdAndDelete(id);

    const user = await User.findById(userId);
    user.totalVideos = Math.max(0, user.totalVideos - 1);
    await user.save();

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadVideo,
  fetchVideos,
  getVideoById,
  getTrendingVideos,
  likeVideo,
  dislikeVideo,
  getUserVideos,
  deleteVideo,
  upload
};
