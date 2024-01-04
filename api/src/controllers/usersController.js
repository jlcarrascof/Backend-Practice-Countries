const axios = require('axios');
const { User } = require('../db');

const creatUserDB = async ( name, email, phone ) => {
    return await User.create({ name, email, phone });
};

const getUserById = async (id, source) => { 
    const user = source === 'api' ? 
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).data : 
    await User.findByPk(id);
    return user;
} 

module.exports = {creatUserDB};
