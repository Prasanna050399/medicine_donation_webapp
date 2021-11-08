const mongoose = require('mongoose')
// const Collector = require('Collection_models')

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
    },
    collection_requests : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "collectors"
    }]
})

const User = mongoose.model('User',UserSchema)

module.exports = User