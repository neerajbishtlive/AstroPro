const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

exports.blockUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
  res.json(user);
};

exports.unblockUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true });
  res.json(user);
};
