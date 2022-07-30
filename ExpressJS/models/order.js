const Sequelize = require('sequelize'); 
const sequelize = require('../utility/database');

const Order = sequelize.define('order',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    }
}); 

module.exports = Order;