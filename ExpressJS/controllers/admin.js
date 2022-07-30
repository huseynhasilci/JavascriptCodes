const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {

    /* Product.getAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Products',
                products: products[0],
                path: '/admin/products',
                action: req.query.action
            });
        })
        .catch((err) =>{
            console.log(err);
        });*/
    Product.findAll()
    .then(products => {
        res.render('admin/products', {
            title: 'Admin Products',
            products: products,
            path: '/admin/products',
            action: req.query.action
        });
    })
    .catch((err) =>{
        console.log(err);
    });
} 

exports.getAddProduct = (req, res, next) => {
    /* Category.getAll()
        .then((categories)=>{
            res.render('admin/add-product', {
                title: 'New Product',
                categories:categories[0],
                path: '/admin/add-product'
            });
        })
        .catch((err)=>{
            console.log(err);
        }); */
    Category.findAll()
    .then((categories) => {
        res.render('admin/add-product',{
            title: 'New Product',
            path: '/admin/add-product',
            categories:categories
        });
    })
    
    
}

exports.postAddProduct = (req, res, next) => {
    /* const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description,
        req.body.categoryid
        );*/
        
    /* product.saveProduct()
        .then(()=>{
            res.redirect('/');
        })
        .catch((err)=>{
            console.log(err);
        }); */
    //const product = new Product();
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const categoryid = req.body.categoryid;
    //const userid = req.user.id;
    const user = req.user;
    user.createProduct({
        name: name,
        price: price,
        imageUrl: imageUrl,
        description: description,
        categoryId: categoryid,
        userId: user.id
    })
    .then((result) => {
        console.log(result);
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.getEditProduct = (req, res, next) => {
    
    /* const productId = req.params.productid;
    Product.getById(productId)
        .then((product) =>{
            Category.getAll()
                .then((categories) => {
                    res.render('admin/edit-product', {
                        title: 'Edit Product',
                        path: '/admin/products',
                        product: product[0][0],
                        categories:categories[0]
                    });
                })
                .catch((err)=>{
                    console.log(err);
                });
            
        })
        .catch((err)=>{
            console.log(err);
        }); */
    Product.findByPk(req.params.productid)
        .then((product) => {
            if(!product){
                res.redirect('/');
            }
            Category.findAll()
                .then((categories) => {
                    res.render('admin/edit-product', {
                        title: 'Edit Product',
                        path: '/admin/products',
                        product: product,
                        categories:categories
                    });
                })
                .catch((err)=>{
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

    
}

exports.postEditProduct = (req, res, next) => {
    
    
    // const product = new Product();
    /* product.id = req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryid = req.body.categoryid; */
    const id =req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const categoryid = req.body.categoryid;

    Product.findByPk(id)
        .then((product) => {
            product.name = name;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description;
            product.categoryId = categoryid;
            return product.save();
        })
        .then((result) => {
            console.log('Updated');
            res.redirect('/admin/products?action=edit');
        })
        .catch((err) => {
            console.log(err);
        });

    /* Product.Update(product)
        .then(()=>{
            res.redirect('/admin/products?action=edit');
        })
        .catch((err)=>{
            console.log(err);
        }); */
    
}

exports.postDeletePorduct = (req, res, next) => {
    const id = req.body.productid;

    Product.destroy({where:{id:id}})
        .then(()=>{
            res.redirect('/admin/products?action=delete');
        })
        .catch((err) => {
            console.log(err);
        });

    /* Product.DeleteById(req.body.productid)
        .then(()=>{
            res.redirect('/admin/products?action=delete');
        })
        .catch((err)=>{
            console.log(err);
        }); */
    
}