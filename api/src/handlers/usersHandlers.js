const { creatUserDB, getUserById, getAllUsers, getUserByName } = require("../controllers/usersController");

const getUsersHandler = async (req, res) => { 
    // Recibir la request
    // Unificar datos
    // Devolver la respuesta
    // Invoca al controller ---> El handler nunca interactua con fuentes externas de info (DB, API, etc)    
    
    const { name } = req.query;

    try {
        if (name) {
            const userByName = await getUserByName(name);
            res.status(200).json(userByName);
        } else {
            const response = await getAllUsers();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }    

};


// id: => usa params
const getDetailHandler = async(req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? 'bdd' : 'api';
    try {
        const response = await getUserById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

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
