const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    passwordHash: {
        type: String 
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    contact: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = User