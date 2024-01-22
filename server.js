const express = require('express');
const dotenv = require('dotenv');
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const fs = require('fs');

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT;

// Read the data file and parse it once when the server starts
const dataPath = new URL('../Insect-dashboard/static/data/data.json', import.meta.url);
const rawData = fs.readFileSync(fileURLToPath(dataPath));
const data = JSON.parse(rawData);

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
    console.log('every item:', data);
    res.render('pages/compare.ejs', { data });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).render('pages/error.ejs', { error });
  }
});

app.get('/filteredData', (req, res) => {
  const selectedLocation = req.query.location;
  const selectedIdentification = req.query.identification;

  // Implement your logic to filter data based on selectedLocation and selectedIdentification
  // Assuming your data is stored in the 'data' variable
  const filteredData = data.filter(item => {
    return (
      (selectedLocation === 'All' || item.location_name === selectedLocation) &&
      (selectedIdentification === 'All' || item.identification_nl === selectedIdentification)
    );
  });

  console.log('Filtered Data:', filteredData); // Log the filtered data

  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Export the Express app
module.exports = app;
