// Importing required modules
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // Set up OpenAI API key
});

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

module.exports = { generateImage }; // Export controller function
