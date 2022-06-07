const mongoose = require('mongoose');



const authorsSchema = new mongoose.Schema({
    author_id: {
        type:Number,
        required: true,
        unique: true
    },

    author_name: String,

    age: Number,

    address: String
})

module.exports = mongoose.model('Author', authorsSchema)