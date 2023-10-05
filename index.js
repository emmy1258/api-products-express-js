const express = require('express');

const app = express();

app.use(express.json());

const productsRouter = require('./routes/courses.route')

app.use('/', productsRouter)

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
});


