const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false} // set to console.log to see the raw SQL queries
); 

sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone : {
    type: DataTypes.INTEGER,
    allowNull: false,
  } 
},
  {timestamps: false}
);

module.exports = {
  conn: sequelize
};