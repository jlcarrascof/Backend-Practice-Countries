const { Router } = require('express');

const postRouter = Router();

postRouter.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});

module.exports = postRouter;