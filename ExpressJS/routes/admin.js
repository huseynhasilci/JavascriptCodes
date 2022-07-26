const express = require('express');
const router = express.Router();
const path = require('path');


const products = [
    {name:'Samsung S8',price:3000,image:'1.jpg',description:'Iyi telefon'},
    {name:'Samsung S7',price:2000,image:'2.jpg',description:'Iyi telefon'},
    {name:'Samsung S9',price:4000,image:'3.jpg',description:'Iyi telefon'},
    {name:'IPhone 7S',price:4500,image:'4.jpg',description:'Iyi telefon'},

]; 


router.get('/add-product', (req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render('add-product',{title:'Add-Product',path:'/add-product'});
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
    //console.log(req.body);
    products.push({name:req.body.name, price:req.body.price, image:req.body.image, description:req.body.description});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;