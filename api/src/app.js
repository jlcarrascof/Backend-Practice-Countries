const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.status(200).send('Aquí estarán los usuarios');
});



module.exports = app;
