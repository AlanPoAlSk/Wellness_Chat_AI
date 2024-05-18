const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/talk', async (req, res) => {
    const { input, client_name, sessionid = null, reset = false } = req.body;

    try {
        const response = await axios.post('https://devman.kuki.ai/talk', new URLSearchParams({
            botkey: process.env.REACT_APP_KUKI_API_KEY,
            input,
            client_name,
            sessionid,
            reset
        }).toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(error.response ? error.response.status : 500).json({
            error: error.response ? error.response.data : 'Internal server error'
        });
    }
});

app.post('/atalk', async (req, res) => {
    const { input, sessionid = null } = req.body;

    try {
        const response = await axios.post('https://devman.kuki.ai/atalk', new URLSearchParams({
            botkey: process.env.REACT_APP_KUKI_API_KEY,
            input,
            sessionid
        }).toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(error.response ? error.response.status : 500).json({
            error: error.response ? error.response.data : 'Internal server error'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
