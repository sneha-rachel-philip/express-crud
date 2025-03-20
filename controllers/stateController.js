const State = require('../models/state');
const stateValidationSchema = require('../validations/stateValidation');

// Create a new state
const createState = async (req, res) => {
  const { error } = stateValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const state = new State(req.body);
    await state.save();
    res.status(201).json(state);
  } catch (err) {
    res.status(500).json({ message: 'Error creating state', error: err.message });
  }
};

// Get all states
const getStates = async (req, res) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching states', error: err.message });
  }
};

// Get state by ID
const getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.status(200).json(state);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching state', error: err.message });
  }
};

// Update state by ID
const updateState = async (req, res) => {
  const { error } = stateValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const state = await State.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.status(200).json(state);
  } catch (err) {
    res.status(500).json({ message: 'Error updating state', error: err.message });
  }
};

// Delete state by ID
const deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.status(200).json({ message: 'State deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting state', error: err.message });
  }
};

module.exports = { createState, getStates, getStateById, updateState, deleteState };
