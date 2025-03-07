const Sequelize = require('sequelize'); 
const sequelize = require('../utility/database');

const CartItem = sequelize.define('cartItem',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
});

module.exports = CartItem;