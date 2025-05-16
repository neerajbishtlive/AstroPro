const { Schema, model } = require('mongoose');

const consultantSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  profileImage: String,
  bio: String,
  dob: Date,
  birthTime: String,
  birthPlace: {
    city: String,
    state: String,
    country: String,
    lat: Number,
    lng: Number
  },
  isBlocked: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  documents: [String],
  experienceYears: Number,
  skills: [String],
  availability: {
    online: { type: Boolean, default: false },
    statusMessage: String
  },
  commission: {
    chat: Number,
    call: Number,
    video: Number,
    gift: Number,
    report: Number
  },
  earnings: [
    {
      source: String,
      amount: Number,
      userId: Schema.Types.ObjectId,
      timestamp: Date
    }
  ],
  ratings: {
    average: Number,
    totalReviews: Number
  },
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

module.exports = model('Consultant', consultantSchema);
