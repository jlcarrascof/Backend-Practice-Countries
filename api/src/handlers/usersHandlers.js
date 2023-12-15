
const getUsersHandler = (req, res) => { 
    // Recibir la request
    // Unificar datos
    // Devolver la respuesta
    // Invoca al controller ---> El handler nunca interactua con fuentes externas de info (DB, API, etc)    
    
    const { name, race } = req.query;
    if (name) res.status(200).send(`Aquí está el usuario ${name}`)
    res.status(200).send(`Aquí están todos los usuarios`)
};


// id: => usa params
const getDetailHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Aquí estará el usuario con id ${id}`);
};

// body: => usa body
const createUserHandler = (req, res) => {
    res.status(200).send('Usuario creado');
};

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler 
};
