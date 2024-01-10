const createPostHandler = async (req, res) => { 
    const { title, body } = req.body;

    try {
        const newPost = await createPostDb(title, body);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }    

};


module.exports = {
    createPostHandler
};
