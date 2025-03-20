require('dotenv').config();
const express = require('express');
const app = express();

// Use environment variable for port, fallback to 3000
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
