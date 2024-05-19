const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: { // corrected 'cartDta' to 'cartData'
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;