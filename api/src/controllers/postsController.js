const { Post } = require('../db');

const createPostDb = async (body, title) => {
    const post = await Post.create({ body, title });
    return post;
}

module.exports = {
    createPostDb
};