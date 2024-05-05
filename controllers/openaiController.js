// Importing required modules
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // Set up OpenAI API key
});
const fs = require('fs');

// Controller function to generate image
const generateImage = async (req, res) => {
  // Extracting prompt and size from request body
  const { prompt, size } = req.body;

  // Determine image size based on input
  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

  try {
    // Generate image using OpenAI API
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: imageSize,
    });

    // Extract image URL from response
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

// Function to edit image
const editImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.images.edit({
      model: 'dall-e-2',
      image: fs.createReadStream('image.png'),
      mask: fs.createReadStream('mask.png'),
      prompt,
      n: 1,
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
      error: 'The image could not be edited',
    });
  }
};

module.exports = { generateImage, editImage }; // Export controller function
