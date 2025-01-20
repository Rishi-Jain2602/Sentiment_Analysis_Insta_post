const express = require('express');
const router = express.Router();
const ImgDb = require('../Model/data');
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

module.exports = router;