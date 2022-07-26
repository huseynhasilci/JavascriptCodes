const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/index',{title: 'Shoping',products:products,path:'/'});
}

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/products',{title: 'Products',products:products,path:'/products'});
}
exports.getProductDetails = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/details',{title: 'Details',path:'/details'});
}

exports.getCart = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/cart',{title: 'Cart',path:'/cart'});
}

exports.getOrders = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/orders',{title: 'Orders',products:products,path:'/orders'});
}

/*
exports.getAddProducts = (req,res,next)=>{
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
    //res.send('<h1> adding product page</h1>');}
/*
exports.postAddProduct = (req,res,next) => {
    //products.push({name:req.body.name, price:req.body.price, image:req.body.image, description:req.body.description});
    const product = new Product(req.body.name,req.body.price,req.body.image,req.body.description);
    product.saveProduct();
    res.redirect('/');
}
*/