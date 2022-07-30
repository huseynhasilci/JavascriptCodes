/*const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: 'A33d691e.'
});

module.exports = connection.promise();*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-app','root','A33d691e.',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


