const axios = require('axios');
const { User, Post } = require('../db');

const creatUserDB = async ( name, email, phone ) => {
    return await User.create({ name, email, phone });
};

const getUserById = async (id, source) => { 
    const user = source === "api" ? 
    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data : 
    await User.findByPk(id, {
        include: {
            model: Post,
            attributes: ['title', 'body'],
        }
    });
    return user;
} 

const infoCleaner = (array) => {
    return array.map((element) => {
    return {
        id: element.id,            
        name: element.name,
        email: element.email,
        phone: element.phone,
        created: false
    }
})
}

// getAllUsers.

const getAllUsers = async () => { 
    const usersDB = await User.findAll();
    const infoAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;
    const usersAPI = infoCleaner(infoAPI);
    return [...usersDB, ...usersAPI];  
}

// getUserByName.

const getUserByName = async (name) => {
    const infoAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;
    const usersAPI = infoCleaner(infoAPI);

    const userFiltered = usersAPI.filter((user) => user.name === name);

    const userDB = await User.findAll({
        where: {
            name: name
        }
    }); 

    return [...userDB, ...userFiltered];
}

module.exports = {creatUserDB, getUserById, getAllUsers, getUserByName};
