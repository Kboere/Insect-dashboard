import express from 'express';
import multer from 'multer';
import convertExcelToJson from './excel-converter.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage
});

// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('static'));

// Set up routes
app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});

app.get('/upload', (req, res) => {
  res.render('pages/upload');
});

app.post('/upload', upload.single('excelFile'), async (req, res) => {
  try {
    const result = await convertExcelToJson(req.file.buffer);
    res.json(result);
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(error.statusCode || 500).json({ error: error.message || 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});