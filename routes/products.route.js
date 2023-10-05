
const express = require('express');

const router = express.Router();

const productController = require('../controllers/products.controller')


//get all products
router.get('/api/products', productController.getAllProducts)

//get a single product
router.get('/api/courses/:courseID', productController.getProduct)

//create a new course
router.post('/api/products',productController.addProduct)

// change a product
router.patch('/api/products/:productID', productController.updateProduct)
 
//delete a product
router.delete('api/products/:productID', productController.deleteProduct)
