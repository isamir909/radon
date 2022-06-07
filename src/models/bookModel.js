const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    bookName:
    {
        type: String,
        required: true
    },
        
    authoreName: String,
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean,
    // isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    // sales: { type: Number, default: 10 },
    year:
    {
        type: Number,
        default: 2021
    },

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
// module.exports.bookSchema =bookSchema.prices


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
