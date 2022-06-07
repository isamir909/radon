const mongoose = require('mongoose');


const booksSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type:Number,
        required: true,
        unique: true
    },
    price: Number,
    rating: String


});


module.exports = mongoose.model('BookData', booksSchema)
