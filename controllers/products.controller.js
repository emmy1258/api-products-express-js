

let {products} = require('../products')

const getAllProducts = (req, res) => {
    res.json(products);
}

const getProduct = (req, res) => {
    const ProductID = +req.params.id;
    const product = products.find((product)=> product.id === ProductID )
    res.json(product);
  }

const addProduct =  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
  
    console.log("errors", errors)
    const product = ({id: products.length + 1 , ...req.body})
  
    res.status(201).json(products);
  
    console.log(products)
  }

const updateProduct = (req, res) => {
    const productID = +req.params.productID;
  
    let product = products.find((product) => product.id === productID);
    if(!product) {
      return res.status(404).json({message: 'Product not found'})
    }
  
    product = {...product, ...req.body};
  
    res.status(200).json(product);
  
  }

const deleteProduct = (req, res) => {
    const productID = +req.params.productID;
    products = products.filter((product) => product.id !== productID )
  
    res.status(200).json({success : true})
  }

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}

