const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max:10
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max:100
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max:15
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', schema);