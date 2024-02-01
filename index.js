const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const url = 'http://localhost:11434/api/generate';

app.use(cors());

app.post('/api/proxy', express.json(), async (req, res) => {
    console.log(req.body)
    let data = req.body;
    console.log(JSON.stringify(data))
    try {
      const response = await axios.post(
        url,
        data,
        {headers: {
            'Content-Type': 'application/json',
        }});
      const responseData = await response.data.response;
      console.log(responseData)
      res.json(responseData);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Error data:', error.response.data);
            console.log('Status code:', error.response.status);
            console.log('Headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

