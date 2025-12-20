const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const { register, login,changePassword } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.put('/change-password', auth, changePassword);
module.exports = router;   // ✅ FIXED — export router ONLY
