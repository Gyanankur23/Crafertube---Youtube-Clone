const express = require("express");
const { uploadVideo, fetchVideos } = require("../controllers/videoController");

const router = express.Router();

router.post("/upload", uploadVideo);
router.get("/", fetchVideos);

module.exports = router;
