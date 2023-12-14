const { Router } = require('express');

const usersRouter = Router();

usersRouter.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});

module.exports = usersRouter;