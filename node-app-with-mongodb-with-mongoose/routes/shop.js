const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const isAuthenticated = require('../middleware/authentication');
const csrf = require('../middleware/csrf');
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productid', shopController.getProduct);

router.get('/categories/:categoryid', shopController.getProductsByCategoryId);

router.get('/cart', csrf, isAuthenticated, shopController.getCart);

router.post('/cart', csrf, isAuthenticated, shopController.postCart);

router.post('/delete-cartitem', csrf, isAuthenticated, shopController.postCartItemDelete);

router.get('/orders', csrf, isAuthenticated, shopController.getOrders);

router.post('/create-order', csrf, isAuthenticated, shopController.postOrder);

module.exports = router;