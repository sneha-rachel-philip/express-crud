const District = require('../models/district');
const districtValidationSchema = require('../validations/districtValidation');

// Create a new district
const createDistrict = async (req, res) => {
  const { error } = districtValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const district = new District(req.body);
    await district.save();
    res.status(201).json(district);
  } catch (err) {
    res.status(500).json({ message: 'Error creating district', error: err.message });
  }
};

// Get all districts
const getDistricts = async (req, res) => {
  try {
    const districts = await District.find().populate('state_id');
    res.status(200).json(districts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching districts', error: err.message });
  }
};

// Get district by ID
const getDistrictById = async (req, res) => {
  try {
    const district = await District.findById(req.params.id).populate('state_id');
    if (!district) return res.status(404).json({ message: 'District not found' });
    res.status(200).json(district);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching district', error: err.message });
  }
};

// Update district by ID
const updateDistrict = async (req, res) => {
  const { error } = districtValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const district = await District.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!district) return res.status(404).json({ message: 'District not found' });
    res.status(200).json(district);
  } catch (err) {
    res.status(500).json({ message: 'Error updating district', error: err.message });
  }
};

// Delete district by ID
const deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByIdAndDelete(req.params.id);
    if (!district) return res.status(404).json({ message: 'District not found' });
    res.status(200).json({ message: 'District deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting district', error: err.message });
  }
};

module.exports = { createDistrict, getDistricts, getDistrictById, updateDistrict, deleteDistrict };
