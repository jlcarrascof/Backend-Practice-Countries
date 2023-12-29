const { creatUserDB } = require("../controllers/usersController");

const getUsersHandler = (req, res) => { 
    // Recibir la request
    // Unificar datos
    // Devolver la respuesta
    // Invoca al controller ---> El handler nunca interactua con fuentes externas de info (DB, API, etc)    
    
    const { name, race } = req.query;
    if (name) res.status(200).send(`Aquí está el usuario ${name}`)
    res.status(200).send(`Todos los usuarios`)
};


// id: => usa params
const getDetailHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Detalle del Usuario id ${id}`);
};

// body: => usa body
const createUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;

    try {
        const response = await creatUserDB(name, email, phone);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler 
};
