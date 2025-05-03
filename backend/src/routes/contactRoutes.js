const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');

// Validation middleware
const contactValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required')
];

// Routes
router.post('/', contactValidation, contactController.createContact);
router.get('/', contactController.getContacts);
router.patch('/:id/status', contactController.updateContactStatus);

module.exports = router; 