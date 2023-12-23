const { User } = require('../db');

const creatUserDB = ( name, email, phone ) => {
    const newUser = User.create({ name, email, phone });
};