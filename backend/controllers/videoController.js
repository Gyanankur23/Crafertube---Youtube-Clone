const Video = require("../models/videoModel");

const uploadVideo = async (req, res) => {
  const { title, description, thumbnail, creator } = req.body;

  try {
    const video = new Video({ title, description, thumbnail, creator });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const fetchVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadVideo, fetchVideos };
