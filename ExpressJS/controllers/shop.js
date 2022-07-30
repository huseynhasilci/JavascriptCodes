const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {
    // const products = Product.getAll();
    //const categories = Category.getAll();

    /* Product.getAll()
        .then(products => {
            res.render('shop/index', {
                title: 'Shopping',
                products: products[0],
                categories:categories,
                path: '/'
            });
        })
        .catch((err) =>{
            console.log(err);
        }); */
    Product.findAll(
        {
            attributes: ['id', 'name', 'price', 'imageUrl']
        })
        .then(products => {

            Category.findAll()
                .then((categories)=>{
                    res.render('shop/index', {
                        title: 'Shopping',
                        products: products,
                        categories:categories,
                        path: '/'
                    });
                })
                .catch((err)=>{
                    console.log(err);
                })
            
        })
        .catch((err) =>{
            console.log(err);
        });

    
}

exports.getProducts = (req, res, next) => {
    
    Product.findAll({
        attributes: ['id', 'name', 'price', 'imageUrl']
    })
    .then(products => {

        Category.findAll()
            .then((categories)=>{
                res.render('shop/products', {
                    title: 'Products',
                    products: products,
                    categories:categories,
                    path: '/products'
                });
            })
            .catch((err)=>{
                console.log(err);
            })
        
    })
    .catch((err) =>{
        console.log(err);
    });

    /* const categories = Category.getAll();
    Product.getAll()
        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products[0],
                categories:categories,
                path: '/products'
            });
        })
        .catch((err) =>{
            console.log(err);
        }); */

}

exports.getProduct = (req, res, next) => {
    /* const productId = req.params.productid;
    Product.getById(productId)
        .then((product) =>{
            res.render('shop/product-detail',{
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        })
        .catch((err)=>{
            console.log(err);
        }); */

    Product.findByPk(req.params.productid)
        .then((product) => {
            res.render('shop/product-detail',{
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) =>{
            console.log(err);
        });
    
    /* Product.findAll( ustteki ve buradaki kod ayni islemi goruyor
        {
            attributes: ['id', 'name', 'price', 'imageUrl','description'],
            where: {id: req.params.productid}
        })
        .then((products) => {
            res.render('shop/product-detail',{
                title: products[0].name,
                product: products[0],
                path: '/products'
            });
        })
        .catch((err) =>{
            console.log(err);
        }); */
    //res.redirect('/');
}

//exports.getProductDetails = (req, res, next) => {
//    res.render('shop/details', {
//        title: 'Details',
//        path: '/details'
//    });
//}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    });
}

exports.getProductsByCategoryId = (req, res, next)=>{
    const categoryid = req.params.categoryid;
    const model = []
    //const products = Product.getProductsByCategoryId(categoryid);
    //const categories = Category.getAll();
    Category.findAll()
        .then((categories) =>{
            model.categories = categories;
            const category = categories.find(i=>i.id==categoryid);
            return category.getProducts();
        })
        .then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                categories:model.categories,
                selectedCategory: categoryid,
                path: '/products'
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    
}
