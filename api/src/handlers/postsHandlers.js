const createPostHandler = (req, res) => { 
    res.status(200).send('Aquí estarán los usuarios');
};


module.exports = {
    createPostHandler
};
