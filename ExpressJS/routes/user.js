const express = require('express');
const router = express.Router();
const path = require('path');
const admin = require('./admin');
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    

    res.render('index',{title: 'Homepage',products:admin.products,path:'/'});
    //res.send('<h1> hello from express.js </h1>');
});


module.exports = router;