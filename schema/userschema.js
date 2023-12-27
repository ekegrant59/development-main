const mongoose = require('mongoose')
const mongodb = process.env.MONGODB
mongoose.connect(mongodb)

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    encryptedpassword: String,
    number: String,
    date: String
})

module.exports = mongoose.model('user', userSchema)