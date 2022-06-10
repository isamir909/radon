// const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const mongoose= require('mongoose')
ObjectId = mongoose.Schema.Types.ObjectId




const createBook = async function (req, res) {
    let book = req.body
    console.log(book)
    let x = book.author_id
    let y = book.publisher_id
    console.log(x)
if (await publisherModel.find({ _id: y })) {
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}
    else{"publisher id is not present"}
}