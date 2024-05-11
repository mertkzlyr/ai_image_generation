// Importing required modules
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // Set up OpenAI API key
});
const fs = require('fs');

// Function to edit image
const createVariation = async (req, res) => {
  try {
    const response = await openai.images.createVariation({
      model: 'dall-e-2',
      image: fs.createReadStream('uploads/variation/variation.png'),
      n: 1,
      size: '512x512',
    });

    const imageUrl = response.data;

    // Send success response with image URL
    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    // Handle errors
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    // Send error response
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

module.exports = { createVariation };
