const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.find()
        .then(products => {
            res.render('shop/index', {
                title: 'Shopping',
                products: products,
                path: '/'
            });
            // Category.findAll()
            //     .then(categories => {
            //         res.render('shop/index', {
            //             title: 'Shopping',
            //             products: products,
            //             path: '/',
            //             categories:categories
            //         });
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
            
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProducts = (req, res, next) => {

    //eq(equal)
    //neq(not equal)
    // gt (greater then)
    // gte (greater then or equal)
    // lt (less then)
    // lte (less then or equal)
    // in
    // nin (not in)

    Product
        .find()
        //.find({price: {$eq: 200}}),
        //.find({price: {$ne: 200}})
        //.find({price: {$gt: 200}})
        //.find({price: {$gte: 200}})
        //.find({price: {$lt: 200}})
        //.find({price: {$lte: 200}})
        //.find({price: {$in: [1000,2000,3000]}})
        //.find({price: {$gte:1000, $lte:2000}})
        //.or([{price: {$gt: 200},name:'Samsung S6'}])

        // starts with
        // .find({name: /^Samsung/})
        // ends with
        // .find({name: /Samsung$/})
        // contaions
        // .find({name: /.*Samsung.*/})

        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                path: '/'
            });
            // Category.findAll()
            //     .then(categories => {
            //         res.render('shop/products', {
            //             title: 'Products',
            //             products: products,
            //             path: '/',
            //             categories:categories
            //         });
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
            
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.findAll()
        .then(categories => {
            model.categories = categories;
            return Product.findByCategoryId(categoryid);
            
        })
        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                categories: model.categories,
                selectedCategory: categoryid,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

exports.getProduct = (req, res, next) => {

    Product
        .findById(req.params.productid)
        //.findOne({name:'Samsung S6', price: 2000})
        .then(product => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}


exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then(products => {
            res.render('shop/cart', {
                title: 'Cart',
                path: '/cart',
                products: products
            });
        }).catch(err => {
            console.log(err);
        });
}

exports.postCart = (req, res, next) => {

    const productId = req.body.productId;
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(()=>{
            res.redirect('/cart');
        })
        .catch(err=>{
            console.log(err);
        });
}

exports.postCartItemDelete = (req, res, next) => {
    const productid = req.body.productid;

    req.user
        .deleteCartItem(productid)
        .then(result => {
            res.redirect('/cart');
        });
}

exports.getOrders = (req, res, next) => {
    req.user
        .getOrders()
        .then(orders => {
            res.render('shop/orders',{
                title: 'Orders',
                path: '/orders',
                orders:orders
            });
        })
        .catch(err=> {
            console.log(err);
        })
}

exports.postOrder = (req, res, next) => {
    req.user
        .addOrder()
        .then(()=>{
            res.redirect('cart');
        })
        .catch(err =>{
            console.log(err);
        })
}


