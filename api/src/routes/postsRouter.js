const { Router } = require('express');
const { postUsersHandler } = require('../handlers/postsHandlers');

const postRouter = Router();

postRouter.post('/', postUsersHandler);

module.exports = postRouter;