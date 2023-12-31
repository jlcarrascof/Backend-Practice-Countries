const axios = require('axios');
const { User } = require('../db');

const creatUserDB = async ( name, email, phone ) => {
    return await User.create({ name, email, phone });
};

const getUserById = async (id, source) => { 
    const user = source === "api" ? 
    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data : 
    await User.findByPk(id);
    return user;
} 

const infoCleaner = (arr) => (arr.map((user) => {
    return {
        id: user.id,            
        name: user.name,
        email: user.email,
        phone: user.phone,
        created: false
    }
}))


// getAllUsers.

const getAllUsers = async () => { 
    const usersDB = await User.findAll();
    const infoAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;
    const userAPI = infoCleaner(infoAPI);
    return [...usersDB, ...userAPI];  
}

module.exports = {creatUserDB, getUserById, getAllUsers};
