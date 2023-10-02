const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });


const express = require('express');

const app = express();

const PORT = 3000;

// Connect to the server
client.connect((err) => {
    if (err) {
      console.error('Failed to connect to the database:', err);
      return;
    }
    console.log('Connected to the database');
    
    // Perform database operations here
    
    // Close the connection
    client.close();
  });
  

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