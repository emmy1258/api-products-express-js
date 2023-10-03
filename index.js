const express = require('express');

const app = express();

const PORT = 3000;


const products = [
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



app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
});