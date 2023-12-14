const { Router } = require('express');
const { getUsersHandler, getDetailHandler } = require('../handlers/usersHandlers');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getDetailHandler);

module.exports = usersRouter;