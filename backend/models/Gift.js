const { Schema, model } = require('mongoose');

const giftSchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true }, // could be emoji or image URL
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Gift', giftSchema);
