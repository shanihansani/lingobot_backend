// Third-party libraries & modules
const mongoose = require('mongoose')
require('dotenv/config')

// Custom libraries & modules
const configs = require('../../config')

// Function for initializing mongo database connection
const connectDatabase = async () => {
    try {
        await mongoose.connect(configs.DB_CONNECTION)
        console.log("Connected to DB!")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connectDatabase