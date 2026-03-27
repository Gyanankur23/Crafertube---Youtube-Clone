const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  username: { 
    type: String, 
    required: true, 
    unique: true, 
    maxlength: 30,
    match: /^[a-zA-Z0-9_]+$/
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: { type: String, required: true, minlength: 6 },
  avatar: { type: String, default: "" },
  channelName: { type: String, required: true, maxlength: 50 },
  channelDescription: { type: String, maxlength: 1000 },
  subscribers: { type: Number, default: 0 },
  totalViews: { type: Number, default: 0 },
  totalVideos: { type: Number, default: 0 },
  isVerified: { type: Boolean, default: false },
  subscribedChannels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  likedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  dislikedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  watchHistory: [{ 
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
    watchedAt: { type: Date, default: Date.now },
    watchTime: { type: Number, default: 0 }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  this.updatedAt = Date.now();
  
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.subscribeToChannel = function(channelId) {
  if (!this.subscribedChannels.includes(channelId)) {
    this.subscribedChannels.push(channelId);
    return this.save();
  }
  return Promise.resolve(this);
};

userSchema.methods.unsubscribeFromChannel = function(channelId) {
  this.subscribedChannels = this.subscribedChannels.filter(id => !id.equals(channelId));
  return this.save();
};

userSchema.methods.likeVideo = function(videoId) {
  if (!this.likedVideos.includes(videoId)) {
    this.likedVideos.push(videoId);
    this.dislikedVideos = this.dislikedVideos.filter(id => !id.equals(videoId));
    return this.save();
  }
  return Promise.resolve(this);
};

userSchema.methods.dislikeVideo = function(videoId) {
  if (!this.dislikedVideos.includes(videoId)) {
    this.dislikedVideos.push(videoId);
    this.likedVideos = this.likedVideos.filter(id => !id.equals(videoId));
    return this.save();
  }
  return Promise.resolve(this);
};

userSchema.methods.addToWatchHistory = function(videoId, watchTime = 0) {
  const existingIndex = this.watchHistory.findIndex(item => item.video.equals(videoId));
  
  if (existingIndex !== -1) {
    this.watchHistory[existingIndex].watchedAt = Date.now();
    this.watchHistory[existingIndex].watchTime += watchTime;
  } else {
    this.watchHistory.push({ video: videoId, watchTime });
  }
  
  if (this.watchHistory.length > 100) {
    this.watchHistory = this.watchHistory.slice(-100);
  }
  
  return this.save();
};

userSchema.statics.getPopularChannels = function(limit = 10) {
  return this.find({ isVerified: true })
    .sort({ subscribers: -1, totalViews: -1 })
    .limit(limit)
    .select('name username channelName subscribers avatar isVerified');
};

module.exports = mongoose.model("User", userSchema);
