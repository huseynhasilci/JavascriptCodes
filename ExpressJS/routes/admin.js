const express = require('express');
const router = express.Router();
const path = require('path');
const adminsController = require('../controllers/admin')

//const products = [
//    {name:'Samsung S8',price:3000,image:'1.jpg',description:'Iyi telefon'},
//    {name:'Samsung S7',price:2000,image:'2.jpg',description:'Iyi telefon'},
//    {name:'Samsung S9',price:4000,image:'3.jpg',description:'Iyi telefon'},
//    {name:'IPhone 7S',price:4500,image:'4.jpg',description:'Iyi telefon'},

//]; 

router.get('/add-product', adminsController.getAddProducts);

router.post('/add-product', adminsController.postAddProduct);

router.get('/edit-product', adminsController.getEditProducts);

router.post('/edit-product', adminsController.postEditProduct);

router.get('/products', adminsController.getProducts);

module.exports.routes = router;
//module.exports.products = products;