const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  createReminder,
  getReminders,
  updateReminder,
  deleteReminder,
} = require("../controllers/reminderController");

router.post("/", auth, createReminder);
router.get("/", auth, getReminders);
router.put("/:id", auth, updateReminder);
router.delete("/:id", auth, deleteReminder);

module.exports = router;
