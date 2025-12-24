

const { get } = require("axios");
const Caregiver = require("../models/Caregiver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER CAREGIVER
const registerCaregiver = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialty,
      experience,
      location:address,
      phone,
      gender
    } = req.body;

    // Check if caregiver already exists
    const exists = await Caregiver.findOne({ email });
    if (exists) return res.status(400).json({ message: "Caregiver already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const caregiver = new Caregiver({
      name,
      email,
      password: hashed,
      specialty,
      experience,
      location:address,
      phone,
      gender,
    });

   await caregiver.save();

    res.status(201).json({ message: "Caregiver registered successfully!" });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// CAREGIVER LOGIN
const loginCaregiver = async (req, res) => {
  try {
    const { email, password } = req.body;

    const caregiver = await Caregiver.findOne({ email });
    if (!caregiver) return res.status(400).json({ message: "Caregiver not found" });

    const match = await bcrypt.compare(password, caregiver.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: caregiver._id, role: "caregiver" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      caregiver
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// SEARCH CAREGIVERS
const searchCaregivers = async (req, res) => {
  try {
    const { location, experience, specialty } = req.query;

    let query = {};

    if (location) query.location = location;
    if (experience) query.experience = { $gte: Number(experience) };
    if (specialty) query.specialty = { $regex: specialty, $options: "i" };

    const caregivers = await Caregiver.find(query);

    res.json(caregivers);

  } catch (error) {
    console.log("SEARCH ERROR:", error);
    res.status(500).json({ message: "Error searching caregivers" });
  }
};

const getAllCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET CAREGIVER BY ID
const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) return res.status(404).json({ message: "Caregiver not found" });

    res.json(caregiver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ================= GET LOGGED-IN CAREGIVER ================= */
const getMyProfile = async (req, res) => {
  try {
    console.log("Logged-in caregiver ID:", req.user.id);

    const caregiver = await Caregiver.findById(req.user.id).select("-password");

    if (!caregiver) {
      return res.status(404).json({ message: "Caregiver not found" });
    }

    res.json(caregiver);
  } catch (error) {
    console.error("CARE GIVER PROFILE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= UPDATE LOGGED-IN CAREGIVER ================= */
const updateMyProfile = async (req, res) => {
  try {
    const updated = await Caregiver.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    ).select("-password");

    res.json(updated);
  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

//module.exports = { getMyProfile };
const changeCaregiverPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const caregiver = await Caregiver.findById(req.user.id);
    if (!caregiver)
      return res.status(404).json({ message: "Caregiver not found" });

    const isMatch = await bcrypt.compare(oldPassword, caregiver.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password incorrect" });

    caregiver.password = await bcrypt.hash(newPassword, 10);
    await caregiver.save();

    res.json({ message: "Password updated successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EXPORTS
module.exports = {
  registerCaregiver,
  loginCaregiver,
  searchCaregivers,
  getAllCaregivers,
  getCaregiverById,
  getMyProfile,
  updateMyProfile,
  changeCaregiverPassword
};

