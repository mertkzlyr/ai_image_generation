// Importing required modules
const express = require('express');
const { generateImage } = require('../controllers/generateImage');
const { editImage } = require('../controllers/editImage');
const { createVariation } = require('../controllers/createVariation');
const router = express.Router();

// Define routes
router.post('/generateimage', generateImage); // Handle POST requests to generateimage endpoint
router.post('/editimage', editImage);
router.post('/createVariation', createVariation);

module.exports = router; // Export router
