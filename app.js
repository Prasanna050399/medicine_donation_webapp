const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginRouter = require('./loginRouter')
const config = require('./config')
const app = express()

mongoose.connect(config.MONGODB
, {useNewUrlParser: true, useUnifiedTopology: true}).then(response => {
    console.log('connected to db')
}).catch(err => {
    console.error(err)
})

app.use(cors())
app.use(express.json())
app.use('/login-as-admin', loginRouter)
// app.use('/collection',loginRouter)

module.exports = app