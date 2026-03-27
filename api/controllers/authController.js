const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    const { name, username, email, password, channelName } = req.body;

    if (!name || !username || !email || !password || !channelName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      });
    }

    const user = new User({
      name,
      username,
      email,
      password,
      channelName
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        channelName: user.channelName,
        avatar: user.avatar,
        subscribers: user.subscribers,
        totalVideos: user.totalVideos,
        totalViews: user.totalViews,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        channelName: user.channelName,
        avatar: user.avatar,
        subscribers: user.subscribers,
        totalVideos: user.totalVideos,
        totalViews: user.totalViews,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId)
      .select('-password')
      .populate('subscribedChannels', 'name username channelName avatar subscribers')
      .populate('likedVideos', 'title thumbnail duration views createdAt')
      .populate('watchHistory.video', 'title thumbnail duration views createdAt');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, channelName, channelDescription } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (channelName) user.channelName = channelName;
    if (channelDescription) user.channelDescription = channelDescription;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        channelName: user.channelName,
        channelDescription: user.channelDescription,
        avatar: user.avatar,
        subscribers: user.subscribers,
        totalVideos: user.totalVideos,
        totalViews: user.totalViews,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subscribeToChannel = async (req, res) => {
  try {
    const { channelId } = req.params;
    const userId = req.user.id;

    if (channelId === userId) {
      return res.status(400).json({ message: "You cannot subscribe to your own channel" });
    }

    const user = await User.findById(userId);
    const targetChannel = await User.findById(channelId);

    if (!targetChannel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    await user.subscribeToChannel(channelId);
    targetChannel.subscribers += 1;
    await targetChannel.save();

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unsubscribeFromChannel = async (req, res) => {
  try {
    const { channelId } = req.params;
    const userId = req.user.id;

    const user = await User.findById(userId);
    const targetChannel = await User.findById(channelId);

    if (!targetChannel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    await user.unsubscribeFromChannel(channelId);
    targetChannel.subscribers = Math.max(0, targetChannel.subscribers - 1);
    await targetChannel.save();

    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubscribedChannels = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId)
      .populate('subscribedChannels', 'name username channelName avatar subscribers isVerified');

    res.status(200).json(user.subscribedChannels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLikedVideos = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId)
      .populate({
        path: 'likedVideos',
        populate: {
          path: 'creator',
          select: 'name username channelName avatar'
        }
      });

    res.status(200).json(user.likedVideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  login,
  getProfile,
  updateProfile,
  subscribeToChannel,
  unsubscribeFromChannel,
  getSubscribedChannels,
  getLikedVideos
};
