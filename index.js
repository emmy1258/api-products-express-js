const express = require('express');

const app = express();

app.use(express.json());

const {body, validationResult} = require('express-validator');

const productController = require('./controllers/products.controller')
const PORT = 3000;


//get all products
app.get('/api/products', productController.getAllProducts)

//get a single product
app.get('/api/courses/:courseID', productController.getProduct)

//create a new course
app.post('/api/products',productController.addProduct)

// change a product
app.patch('/api/products/:productID', productController.updateProduct)

//delete a product
app.delete('api/products/:productID', productController.deleteProduct)

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
});


