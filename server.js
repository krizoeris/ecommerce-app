const express = require('express'); // import express from packages
const bodyParser = require('body-parser'); // import body parser
const mongoose = require('mongoose');

// call all express as a function
const app = express(); 

app.use(bodyParser.urlencoded({extended: false})); // Parse from the header
app.use(bodyParser.json()); // Parse the json

// const dbURL = 'mongodb+srv://admin:pass123@cluster0-rgqh8.mongodb.net/test?retryWrites=true&w=majority';
// mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//     console.log('db is connected')
// })
// .catch((e) => {
//     console.log('Cant connect to the db: ', e)
// });

// Testing the landing page
app.get('/', (req, res) => {
    res.send("test e-commerce");
});

// 404 page
app.get('/*', (req, res) => {
    res.send("404 Not Found!");
});

// setup the server "http://localhost:3010"
app.listen(3010, () => {
    console.log('you are connected');
}); 