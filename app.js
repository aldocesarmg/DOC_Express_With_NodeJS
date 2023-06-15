const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/img/pex.jpg'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});