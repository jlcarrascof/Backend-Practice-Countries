const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getDetailHandler);

module.exports = usersRouter;