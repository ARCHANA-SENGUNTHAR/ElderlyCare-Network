// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/authMiddleware");
// const { chatWithAI } = require("../controllers/aiController");

// router.post("/chat", auth, chatWithAI);

// module.exports = router;


const express = require("express");
const router = express.Router();
const { aiChat } = require("../controllers/aiController");

router.post("/chat", aiChat);

module.exports = router;


