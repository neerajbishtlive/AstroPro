const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  dob: Date,
  birthTime: String,
  birthPlace: {
    city: String,
    state: String,
    country: String,
    lat: Number,
    lng: Number
  },
  profileImage: String,
  isBlocked: { type: Boolean, default: false },
  walletBalance: { type: Number, default: 0 },
  walletTransactions: [
    {
      type: { type: String },
      amount: Number,
      source: String,
      itemId: Schema.Types.ObjectId,
      timestamp: Date
    }
  ],
  activityLogs: [
    {
      activityType: String,
      details: Object,
      timestamp: Date
    }
  ],
  notificationLogs: [
    {
      title: String,
      message: String,
      seen: { type: Boolean, default: false },
      timestamp: Date
    }
  ]
}, { timestamps: true });

module.exports = model('User', userSchema);
