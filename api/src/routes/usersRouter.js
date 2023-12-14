const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.status(200).send('Aquí estarán los usuarios');
});

usersRouter.get('/:id', (req, res) => {
    res.status(200).send('Detalle del usuario');
});

module.exports = usersRouter;