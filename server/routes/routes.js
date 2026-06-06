const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload-file", upload.single("MyFile"), (req, res) => {
  console.log(req.file);

  res.send("File uploaded successfully");
});

module.exports = router;