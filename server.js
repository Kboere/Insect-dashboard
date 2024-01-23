import express from 'express';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT;

// Read the data file and parse it once when the server starts
// Constructing the absolute path to 'diopsis.json' based on the current module's URL
const dataPath = new URL('../insectendashboard/static/data/diopsis.json', import.meta.url);
const absolutePath = fileURLToPath(dataPath);

// Logging the absolute path for debugging purposes
console.log('Absolute Path:', absolutePath);

try {
  const rawData = fs.readFileSync(absolutePath);
  const data = JSON.parse(rawData);
} catch (error) {
  console.error('Fout bij het lezen of parseren van het bestand:', error);
}


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get('/', (req, res) => {
  try {
    res.render('pages/index.ejs');
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).render('pages/error.ejs', { error });
  }
});

app.get('/vergelijken', (req, res) => {
  try {
    // console.log('every item:', data);
    res.render('pages/compare.ejs');
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).render('pages/error.ejs', { error });
  }
});

app.get('/filteredData', (req, res) => {
  const selectedProvince = req.query.province;
  const selectedLocation = req.query.location;
  const selectedIdentification = req.query.identification;

  // Implement your logic to filter data based on selectedLocation and selectedIdentification
  // Assuming your data is stored in the 'data' variable
 const filteredData = data.filter(item => {
    return (
      (selectedLocation === 'All' || item.location_name === selectedLocation) &&
      (selectedIdentification === 'All' || item.identification_nl === selectedIdentification) &&
      (selectedProvince === 'All' || item.province === selectedProvince)
    );
 });

 console.log('Filtered Data:', filteredData); // Log the filtered data

 res.json(filteredData);
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
