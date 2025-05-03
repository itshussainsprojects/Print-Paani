const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const designController = require('../controllers/designController');

// Validation middleware
const designValidation = [
  body('userId').notEmpty().withMessage('User ID is required'),
  body('name').notEmpty().withMessage('Name is required'),
  body('bottleColor').notEmpty().withMessage('Bottle color is required'),
  body('capColor').notEmpty().withMessage('Cap color is required'),
  body('labelText').notEmpty().withMessage('Label text is required'),
  body('textColor').notEmpty().withMessage('Text color is required'),
  body('fontSize').isInt().withMessage('Font size must be a number'),
  body('bottleSize').notEmpty().withMessage('Bottle size is required')
];

// Routes
router.post('/', designValidation, designController.createDesign);
router.get('/', designController.getDesigns);
router.get('/user/:userId', designController.getDesignsByUser);
router.patch('/:id/status', designController.updateDesignStatus);

module.exports = router; 