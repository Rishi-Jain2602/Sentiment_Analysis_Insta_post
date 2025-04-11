const express = require('express');
const router = express.Router();
const ImgDb = require('../Model/Img_schema.js');
const VidDb = require('../Model/video_schema.js');
const connectDb = require('../db');
connectDb();

// Optional: Middleware to handle CORS for each route (safer in serverless)
const setCORS = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");  // Or restrict to your domain
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
};

router.options("*", setCORS, (req, res) => {
  // Respond to preflight request
  res.sendStatus(200);
});

router.post("/fetchImg", setCORS, async (req, res) => {
  try {
    const images = await ImgDb.find({});
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/fetchVid", setCORS, async (req, res) => {
  try {
    const videos = await VidDb.find({});
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
