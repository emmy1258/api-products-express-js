const express = require('express');

const app = express();

app.use(express.json());

const {body, validationResult} = require('express-validator');

const PORT = 3000;


let products = [
    {
        id:1,
        title: 'phone',
        price: 5000
    },
    {
      id:2,
      title: 'watch',
      price: 3000
  }
]

//get all products
app.get('/api/products', (req, res) => {
  res.json(products);
})

//get a single product
app.get('/api/products/:id', (req, res) => {
  const ProductID = +req.params.id;
  const product = products.find((product)=> product.id === ProductID )
  res.json(product);
})

//create a new course

app.post('/api/products', body('title').notEmpty() ,(req, res) => {
  console.log(req.body);
  const errors = validationResult(req);

  console.log("errors", errors)
  const product = ({id: products.length + 1 , ...req.body})

  res.status(201).json(products);

  console.log(products)
})

app.patch('/api/products/:productID', (req, res) => {
  const productID = +req.params.productID;

  let product = products.find((product) => product.id === productID);
  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  product = {...product, ...req.body};

  res.status(200).json(product);

})

//delete a product
app.delete('api/products/:productID',(req, res) => {
  const productID = +req.params.productID;
  products = products.filter((product) => product.id !== productID )

  res.status(200).json({success : true})
})

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
});


