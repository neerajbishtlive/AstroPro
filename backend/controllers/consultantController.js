const Consultant = require('../models/Consultant');

exports.createConsultant = async (req, res) => {
  try {
    const consultant = await Consultant.create(req.body);
    res.status(201).json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllConsultants = async (req, res) => {
  const consultants = await Consultant.find();
  res.json(consultants);
};

exports.getConsultantById = async (req, res) => {
  const consultant = await Consultant.findById(req.params.id);
  res.json(consultant);
};

exports.updateConsultant = async (req, res) => {
  const consultant = await Consultant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(consultant);
};

exports.approveConsultant = async (req, res) => {
  const consultant = await Consultant.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
  res.json(consultant);
};

exports.blockConsultant = async (req, res) => {
  const consultant = await Consultant.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
  res.json(consultant);
};

exports.unblockConsultant = async (req, res) => {
  const consultant = await Consultant.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true });
  res.json(consultant);
};
