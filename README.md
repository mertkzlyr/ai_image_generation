# OpenAI Image Generator

## Project Description
OpenAI Image Generator is an application that leverages the OpenAI API to create, edit, and generate variations of images. You can create images from scratch based on text descriptions, edit parts of an existing image, and generate variations of a given image.

## Installation Instructions
To run this application on your local host, follow these steps:

1. **Install Node.js**: Make sure you have Node.js installed on your computer. You can download it from [here](https://nodejs.org/).

2. **Clone this repository**: 
   ```bash
   git clone https://github.com/mertkzlyr/ai_image_generation.git
   cd ai_image_generation
3. **Install dependencies**:
   ```bash
   npm install
4. **Create an OpenAI API key**:
   Sign up at [OpenAI](https://platform.openai.com/) and generate an API key. Add your API key to the .env file.

5. **Run the application**:
   ```bash
   npm run start

## Usage
### Creating an Image from Scratch
Simply describe what you want to see, and the application will generate an image based on your description.

### Editing an Image
To edit an image:
1. Upload the image you want to edit.
   <br></br>
   <img src="https://github.com/mertkzlyr/ai_image_generation/assets/91737596/6fc4c9c0-cb08-4abd-aae7-e507dfb08ee5" height="256px" width="256px">
3. Upload a mask image indicating the part of the image you want to edit.
   <br></br>
   <img src="https://github.com/mertkzlyr/ai_image_generation/assets/91737596/a93b3305-8816-496b-ab44-d4dd0013444e" height="256px" width="256px">
5. Provide a description of the changes you want to make. (For example: Complete the image)

### Creating Variations
Upload an image, and the application will generate variations of it.

## Features
- **Text to Image Generation**: Create images from textual descriptions.
- **Image Editing**: Edit specific parts of an image using a mask and description.
- **Image Variation**: Generate different variations of a provided image.
- **User-Friendly Interface**: Easy-to-use interface for uploading images and providing descriptions.

## Contributing
We welcome contributions to enhance the functionality and features of this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure your contributions adhere to the project's coding standards and conventions.
