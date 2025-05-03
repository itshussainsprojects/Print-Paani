const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    default: "new",
    enum: ["new", "read", "replied"]
  }
});

module.exports = mongoose.model('Contact', contactSchema); 