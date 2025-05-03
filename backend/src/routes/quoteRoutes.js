const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const quoteController = require('../controllers/quoteController');

// Validation middleware
const quoteValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('company').notEmpty().withMessage('Company name is required'),
  body('bottleSize').isIn(['500ml', '1000ml', '1500ml']).withMessage('Invalid bottle size'),
  body('quantity').isInt({ min: 100 }).withMessage('Minimum quantity is 100'),
  body('designHelp').isIn(['yes', 'no']).withMessage('Invalid design help option')
];

// Routes
router.post('/', quoteValidation, quoteController.createQuote);
router.get('/', quoteController.getQuotes);
router.patch('/:id/status', quoteController.updateQuoteStatus);

module.exports = router; 