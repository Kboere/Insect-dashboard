import express from 'express';
import dotenv from 'dotenv';

import { insectenData } from './static/data/diopsis.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

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

  // Implement your logic to filter data based on selectedLocation and selectedIdentification or more
  // Assuming your data is stored in the 'insectenData' variable
 const filteredData = insectenData.filter(item => {
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
