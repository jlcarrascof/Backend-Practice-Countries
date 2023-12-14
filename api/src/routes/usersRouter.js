const { Router } = require('express');

const usersRouter = Router();

const getUsersHandler = (req, res) => { 
    res.status(200).send('Aquí estarán los usuarios');
};

const getDetailHandler = (req, res) => {
    res.status(200).send('Aquí estará el detalle del usuario');
};

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getDetailHandler);

module.exports = usersRouter;