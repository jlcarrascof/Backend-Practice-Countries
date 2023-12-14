const { Router } = require('express');

const mainRouter = Router();

mainRouter.get('/users', (req, res) => {
    res.status(200).send('Aquí estarán los usuarios');
});

mainRouter.get('/users/:id', (req, res) => {
    res.status(200).send('Detalle del usuario');
});

mainRouter.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});

module.exports = mainRouter;