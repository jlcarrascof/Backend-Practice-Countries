app.get('/users', (req, res) => {
    res.status(200).send('Aquí estarán los usuarios');
});

app.get('/users/:id', (req, res) => {
    res.status(200).send('Detalle del usuario');
});

app.post('/users', (req, res) => {
    res.status(200).send('Crear un usuario');
});
