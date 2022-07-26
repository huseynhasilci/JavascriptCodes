const express = require('express');
const router = express.Router();
const path = require('path');
const admin = require('./admin');
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/details', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);
//router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    

    //res.render('index',{title: 'Homepage',products:admin.products,path:'/'});
    //res.send('<h1> hello from express.js </h1>');
//});


module.exports = router;