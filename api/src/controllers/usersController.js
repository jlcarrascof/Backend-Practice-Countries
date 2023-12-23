const { User } = require('../db');

const creatUserDB = async ( name, email, phone ) => {
    return await User.create({ name, email, phone });
};

module.exports = {creatUserDB};
