// backend/controllers/walletController.js
const User = require('../models/User');
const Consultant = require('../models/Consultant');
const Gift = require('../models/Gift');
const mongoose = require('mongoose');
const { Parser } = require('json2csv');
const fs = require('fs');

// ...existing wallet functions remain unchanged...

exports.sendGift = async (req, res) => {
  try {
    const { userId, consultantId, giftId } = req.body;
    const user = await User.findById(userId);
    const consultant = await Consultant.findById(consultantId);
    const gift = await Gift.findById(giftId);

    if (!user || !consultant || !gift) return res.status(404).json({ error: 'User, Consultant, or Gift not found' });
    if (user.walletBalance < gift.price) return res.status(400).json({ error: 'Insufficient balance' });

    const commission = consultant.commission?.gift || 0;
    const earnings = gift.price * (commission / 100);

    user.walletBalance -= gift.price;
    user.walletTransactions.push({
      type: 'debit',
      amount: gift.price,
      source: 'gift',
      itemId: consultantId,
      note: `Gift sent: ${gift.name}`,
      timestamp: new Date()
    });

    consultant.earnings.push({
      source: 'gift',
      amount: earnings,
      userId,
      timestamp: new Date()
    });

    await user.save();
    await consultant.save();

    res.status(200).json({ message: 'Gift sent successfully', consultantEarnings: earnings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find().sort({ price: 1 });
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createGift = async (req, res) => {
  try {
    const { name, icon, price } = req.body;
    const gift = await Gift.create({ name, icon, price });
    res.status(201).json(gift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};