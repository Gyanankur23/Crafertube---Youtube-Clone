const express = require("express");
const { 
  uploadVideo, 
  fetchVideos, 
  getVideoById, 
  getTrendingVideos,
  likeVideo,
  dislikeVideo,
  getUserVideos,
  deleteVideo,
  upload
} = require("../controllers/videoController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload", protect, upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]), uploadVideo);

router.get("/", fetchVideos);
router.get("/trending", getTrendingVideos);
router.get("/:id", getVideoById);
router.get("/user/:userId", getUserVideos);

router.post("/:id/like", protect, likeVideo);
router.post("/:id/dislike", protect, dislikeVideo);
router.delete("/:id", protect, deleteVideo);

module.exports = router;
