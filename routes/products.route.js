
const express = require('express');

const router = express.Router();

const productController = require('../controllers/products.controller')


router.route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct)

router.route('/api/courses/:courseID')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

 module.exports = router;
