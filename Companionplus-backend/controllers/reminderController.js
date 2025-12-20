const Reminder = require("../models/Reminder");

/* ================= ADD ================= */
exports.createReminder = async (req, res) => {
  try {
    const reminder = new Reminder({
      elderId: req.user.id,
      ...req.body,
    });

    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({
      elderId: req.user.id,
    }).sort({ datetime: 1 });

    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
exports.updateReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndUpdate(
      { _id: req.params.id, elderId: req.user.id },
      req.body,
      { new: true }
    );

    res.json(reminder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteReminder = async (req, res) => {
  try {
    await Reminder.findOneAndDelete({
      _id: req.params.id,
      elderId: req.user.id,
    });

    res.json({ message: "Reminder deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
