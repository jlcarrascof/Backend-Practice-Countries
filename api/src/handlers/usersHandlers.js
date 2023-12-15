const getUsersHandler = (req, res) => { 
    // Recibir la request
    // Unificar datos
    // Devolver la respuesta
    // Invoca al controller ---> El handler nunca interactua con fuentes externas de info (DB, API, etc)    
    res.status(200).send('Aquí estarán los usuarios');
};

const getDetailHandler = (req, res) => {
    res.status(200).send('Aquí estará el detalle del usuario');
};

const createUserHandler = (req, res) => {
    res.status(200).send('Usuario creado');
};

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler 
};
