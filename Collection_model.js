const mongoose = require('mongoose')

const col_model = new mongoose.Schema({
    request:[{
        medicineName: {
            type: String
        },
        weight: {
            type: Number 
        },
        companyName: {
            type: String
        },
        quantity: {
            type: Number
        }}],
        status:{
            type:String
        },
        active:{
            type:Boolean
        },
        date:{
            type:Date
        }
    })



const Collector = mongoose.model('Collector',col_model)

module.exports = Collector



