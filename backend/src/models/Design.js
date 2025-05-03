const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  bottleColor: { type: String, required: true },
  capColor: { type: String, required: true },
  labelText: { type: String, required: true },
  textColor: { type: String, required: true },
  fontSize: { type: Number, required: true },
  logoImage: { type: String },
  bottleSize: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    default: "pending",
    enum: ["pending", "approved", "rejected"]
  }
});

module.exports = mongoose.model('Design', designSchema); 