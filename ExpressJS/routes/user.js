const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'));
    //res.send('<h1> hello from express.js </h1>');
});


module.exports = router;