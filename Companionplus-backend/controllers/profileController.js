const Elder = require('../models/Elder'); // Assuming you have an Elder model
const Relation = require('../models/Relation'); // Assuming you have a Relation model

// Get elder profile by ID
const getElderProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const elder = await Elder.findById(id);
    if (!elder) {
      return res.status(404).json({ message: 'Elder profile not found' });
    }
    res.status(200).json(elder);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching elder profile' });
  }
};

// Get relation profile by ID
const getRelationProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const relation = await Relation.findById(id);
    if (!relation) {
      return res.status(404).json({ message: 'Relation profile not found' });
    }
    res.status(200).json(relation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching relation profile' });
  }
};

// Update elder profile
const updateElderProfile = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const elder = await Elder.findByIdAndUpdate(id, updatedData, { new: true });
    if (!elder) {
      return res.status(404).json({ message: 'Elder profile not found' });
    }
    res.status(200).json(elder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating elder profile' });
  }
};

// Update relation profile
const updateRelationProfile = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const relation = await Relation.findByIdAndUpdate(id, updatedData, { new: true });
    if (!relation) {
      return res.status(404).json({ message: 'Relation profile not found' });
    }
    res.status(200).json(relation);
  } catch (error) {
    res.status(500).json({ message: 'Error updating relation profile' });
  }
};



module.exports = {
  getElderProfile,
  getRelationProfile,
  updateElderProfile,
  updateRelationProfile,
};
