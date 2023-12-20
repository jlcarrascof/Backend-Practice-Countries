const {Sequelize} = require('sequelize');
require('dotenv').config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false} // set to console.log to see the raw SQL queries
); 

module.exports = {
  conn: sequelize
};