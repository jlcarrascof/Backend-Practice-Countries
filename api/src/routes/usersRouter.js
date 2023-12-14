const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/users', (req, res) => {
    res.status(200).send('Aquí estarán los usuarios');
});

usersRouter.get('/users/:id', (req, res) => {
    res.status(200).send('Detalle del usuario');
});

usersRouter.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});

module.exports = usersRouter;