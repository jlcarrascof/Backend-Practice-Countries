const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('Hola, estoy pasando por el middleware');
    next();
});

module.exports = app;
