const express = require('express');
const router = express.Router(); //call Router() express function
const bcrypt = require('bcrypt');
const UserModel = require('../models/User'); // import the user model

router.post('/register', (req, res) =>{
    const formdata = {
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'email': req.body.email,
        'password': req.body.password,
        'type': req.body.type
    }

    const theUser = new UserModel(formdata);// for saving to the database

    bcrypt.genSalt((err, salt) => {
        bcrypt.hash(formdata.password, salt, (err, hashedPassword) => {
            theUser.password = hashedPassword; // Replace the password value in formdata

            theUser.save(); // Save to database
            res.send('User registration complete!');

        }) // Generate Hash
    }); // Genarate Salt

});

router.post('/login', (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    UserModel.find({email: email})// Search if email exist in the database
    .then((isMatch) => {
        if(isMatch.length>0) { // if email exist
            res.send('email found');
        } else { // if email doesnt exist
            res.send('Please check email and password, Try Again')
        }
    }); 
});

router.get('/all', (req, res) =>{
    UserModel.find()
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;


