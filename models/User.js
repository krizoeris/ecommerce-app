const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const UserSchema = new Schema({
    firstname:  {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;