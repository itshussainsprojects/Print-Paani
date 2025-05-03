const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const chatUserController = require('../controllers/chatUserController');

// Validation middleware
const chatUserValidation = [
  body('conversationId').notEmpty().withMessage('Conversation ID is required'),
  body('name').notEmpty().withMessage('Name is required')
];

// Routes
router.post('/', chatUserValidation, chatUserController.createOrUpdateChatUser);
router.get('/:conversationId', chatUserController.getChatUser);

module.exports = router; 