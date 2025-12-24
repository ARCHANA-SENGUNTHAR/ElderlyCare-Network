

// const express = require("express");
// const router = express.Router();
// const Caregiver = require("../models/Caregiver");
// const auth = require("../middleware/authMiddleware");

// const {
//   registerCaregiver,
//   loginCaregiver,
//   searchCaregivers,
//   getAllCaregivers,
//   getCaregiverById,
//   getMyProfile
  
// } = require("../controllers/caregiverController");

// // Register caregiver
// router.post("/register", registerCaregiver);

// // Login caregiver
// router.post("/login", loginCaregiver);

// // Search caregivers (with filters)
// router.get("/search", searchCaregivers);


// router.get("/", getAllCaregivers);         // Get all caregivers
// router.get("/:id", getCaregiverById);   
// router.get("/me", auth, getMyProfile);

// module.exports = router;






const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  registerCaregiver,
  loginCaregiver,
  searchCaregivers,
  getAllCaregivers,
  getCaregiverById,
  getMyProfile,
  updateMyProfile,
  changeCaregiverPassword
} = require("../controllers/caregiverController");

// Register caregiver
router.post("/register", registerCaregiver);

// Login caregiver
router.post("/login", loginCaregiver);

// Logged-in caregiver profile  ✅ MOVE THIS UP
router.get("/me", auth, getMyProfile);
router.put("/me", auth, updateMyProfile); 

// Search caregivers
router.get("/search", searchCaregivers);

// Get all caregivers
router.get("/", getAllCaregivers);

// Get caregiver by ID (KEEP THIS LAST) ✅
router.get("/:id", getCaregiverById);

router.put(
  "/change-password",
  auth,
  changeCaregiverPassword
);

module.exports = router;
