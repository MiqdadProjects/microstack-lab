const express = require('express');
const axios = require('axios');
const app = express();

const FLASK_SERVICE_HOST = process.env.FLASK_SERVICE_HOST || 'flask-service';
const FLASK_SERVICE_PORT = process.env.FLASK_SERVICE_PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the Express Service!');
});

app.get('/combo-greet', async (req, res) => {
  try {
    const response = await axios.get(`http://${FLASK_SERVICE_HOST}:${FLASK_SERVICE_PORT}/greet`);
    res.json({
      message: `Express says hi! Flask replied: "${response.data.message}"`
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not reach Flask service', details: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express service running on port ${PORT}`);
});
