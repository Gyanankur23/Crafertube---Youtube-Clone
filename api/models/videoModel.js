const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, maxlength: 5000 },
  videoUrl: { type: String, required: true },
  thumbnail: { type: String, required: true },
  duration: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  channelName: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  tags: [{ type: String }],
  category: { 
    type: String, 
    enum: ['entertainment', 'education', 'gaming', 'music', 'sports', 'technology', 'lifestyle', 'business'],
    default: 'entertainment'
  },
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

videoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

videoSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

videoSchema.methods.addLike = function() {
  this.likes += 1;
  return this.save();
};

videoSchema.methods.addDislike = function() {
  this.dislikes += 1;
  return this.save();
};

videoSchema.statics.getTrendingVideos = function(limit = 10) {
  return this.find({ isPublic: true })
    .sort({ views: -1, likes: -1 })
    .limit(limit)
    .populate('creator', 'name username avatar');
};

videoSchema.statics.searchVideos = function(query, limit = 20) {
  return this.find({
    isPublic: true,
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { tags: { $in: [new RegExp(query, 'i')] } },
      { channelName: { $regex: query, $options: 'i' } }
    ]
  })
  .sort({ views: -1 })
  .limit(limit)
  .populate('creator', 'name username avatar');
};

module.exports = mongoose.model("Video", videoSchema);