const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample data (replace with your data source)
let trafficData = [];

app.get('/traffic', (req, res) => {
  res.json(trafficData);
});

// Route to push sample data (replace with your data source)
app.post('/pushData', (req, res) => {
  const newData = req.body;
  trafficData = newData;
  res.status(200).send('Data pushed successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});