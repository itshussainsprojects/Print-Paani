const mongoose = require('mongoose');

const chatUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  lastUpdated: { type: Date, default: Date.now },
  conversationId: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ChatUser', chatUserSchema); 