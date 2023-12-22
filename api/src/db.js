const {Sequelize} = require('sequelize');
require('dotenv').config();

const UsersModel = require('./models/UsersModel');
const PostsModel = require('./models/PostsModel');

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false} // set to console.log to see the raw SQL queries
); 

// Definir modelos a usar.
UsersModel(sequelize);
PostsModel(sequelize);

// Crear las relaciones // asociaciones

const { User, Post } = sequelize.models;

// Un usuario tiene muchos posts
User.hasMany(Post);

// Un post pertenece a un usuario
Post.belongsTo(User);

module.exports = {
  conn: sequelize
};