// Importing required modules
const express = require('express');
const dotenv = require('dotenv').config();

// Setting up the port
const port = process.env.PORT || 8000;

// Creating an Express application
const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routing
app.use('/openai', require('./routes/openaiRoutes')); // Use routes defined in openaiRoutes.js

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
