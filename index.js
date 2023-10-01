const express = require('express');

const app = express();

const PORT = 3000;

const products = [
    {
        id:1,
        title: 'phone',
        price: 5000
    }
]

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
});