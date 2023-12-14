const { Router } = require('express');

const postsRouter = Router();

postsRouter.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});

module.exports = postsRouter;