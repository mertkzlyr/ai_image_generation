// Importing required modules
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Setting up the port
const port = process.env.PORT || 8000;

// Creating an Express application
const app = express();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath =
      file.fieldname === 'image'
        ? 'uploads/image'
        : file.fieldname === 'mask'
        ? 'uploads/mask'
        : 'uploads/variation';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.png');
  },
});

const upload = multer({ storage: storage });

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/openai', require('./routes/openaiRoutes')); // Use routes defined in openaiRoutes.js
app.post(
  '/upload-edit-image',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'mask', maxCount: 1 },
  ]),
  (req, res) => {
    res.sendFile('public/html/edit-image.html', { root: __dirname });
  }
);

app.post('/upload-create-variation', upload.single('variation'), (req, res) => {
  res.sendFile('public/html/create-variation.html', { root: __dirname });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
