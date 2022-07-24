const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    /*res.send(`
    <html>
        <head>
            <title>Add a New Product</title>
        </head>
        <body>
            <form action="/add-product" method="POST">
                <input type="text" name="productName">
                <input type="submit" value="Save Product">
            </form>
        </body>
    </html>`);
    */
    //res.send('<h1> adding product page</h1>');

});

router.post('/add-product',(req,res,next)=>{
    /*
    if (req.method ==="POST"){

    }*/
    //database kayit ...
    console.log(req.body);

    res.redirect('/');
});

module.exports = router;
