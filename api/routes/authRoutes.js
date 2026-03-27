const express = require("express");
const { 
  signUp, 
  login, 
  getProfile, 
  updateProfile,
  subscribeToChannel,
  unsubscribeFromChannel,
  getSubscribedChannels,
  getLikedVideos
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

router.post("/subscribe/:channelId", protect, subscribeToChannel);
router.post("/unsubscribe/:channelId", protect, unsubscribeFromChannel);
router.get("/subscriptions", protect, getSubscribedChannels);
router.get("/liked-videos", protect, getLikedVideos);

module.exports = router;
