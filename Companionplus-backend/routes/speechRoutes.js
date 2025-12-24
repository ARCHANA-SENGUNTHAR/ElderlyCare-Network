// const express = require("express");
// const multer = require("multer");
// const { speechToText } = require("../controllers/speechController");

// const router = express.Router();
// const upload = multer();

// router.post("/speech-to-text", upload.single("audio"), speechToText);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const { speechToText } = require("../controllers/speechController");

const router = express.Router();

// 👇 THIS IS VERY IMPORTANT
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/speech-to-text", upload.single("audio"), speechToText);

module.exports = router;
