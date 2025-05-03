const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  bottleSize: { 
    type: String, 
    required: true,
    enum: ["500ml", "1000ml", "1500ml"]
  },
  quantity: { type: Number, required: true, min: 100 },
  customization: [{ type: String }],
  designHelp: { 
    type: String, 
    required: true,
    enum: ["yes", "no"]
  },
  deadline: { type: Date },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    default: "pending",
    enum: ["pending", "approved", "rejected"]
  }
});

module.exports = mongoose.model('Quote', quoteSchema); 