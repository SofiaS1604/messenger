const {Schema, model} = require('mongoose');

const User = new Schema({
    first_name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
        default: 'http://localhost:3000/photos/avatar.jpg'
    },
    token: {
        type: String,
        required: true,
        default: '-1'
    }
}, {versionKey: '_somethingElse'});

module.exports = model('User', User);