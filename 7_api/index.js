const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/prueba', (req, res) => res.status(203).send({ message: 'this is a test'}));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));   