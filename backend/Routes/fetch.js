const express = require('express');
const router = express.Router();
const ImgDb = require('../Model/Img_schema.js');
const VidDb = require('../Model/video_schema.js')
const connectDb = require('../db');
connectDb();

router.post("/fetchImg", async (req,res)=>{
  try {
      const images = await ImgDb.find({});
      res.json(images);
  } catch (error) {
      console.log(error);
      res.status(500).json({message:"Server Error"})
  }
})

router.post("/fetchVid",async(req,res)=>{
  try {
    const videos = await VidDb.find({});
    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error"})
  }
})

module.exports = router;