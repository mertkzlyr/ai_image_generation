// Importing required modules
const express = require('express');
const { generateImage } = require('../controllers/openaiController'); // Importing the controller function
const router = express.Router();

// Define routes
router.post('/generateimage', generateImage); // Handle POST requests to generateimage endpoint

module.exports = router; // Export router
