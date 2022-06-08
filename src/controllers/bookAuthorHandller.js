const authorModel = require('../models/authorModel')
const booksDataModel = require('../models/bookModel')

let createAuthor = async function (req, res) {
    let authorData = req.body
    let Data = await authorModel.create(authorData)
    res.send(Data)
}


let createBook = async function (req, res) {
    let bookdata = req.body
    let Data = await booksDataModel.create(bookdata)
    res.send(Data)
}

let booksByChetanBhagat = async function (req, res) {
    let iD = await authorModel.find({ author_name: "Chetan Bhagat" }).select({ "author_id": 1, _id: 0 })
    // console.log(iD)
    let bookdata = await booksDataModel.find({ author_id: iD[0].author_id })
    res.send({ msg: bookdata })
}


let updateBookPrice = async function (req, res) {
    let book = await booksDataModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    // console.log(book)
    let authorData = await authorModel.find({ author_id: book.author_id }).select("author_name")
    let price = book.price
    res.send({ msg: authorData, price })
}


let priceRange = async function (req, res) {
    let books = await booksDataModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 });
    console.log(books)
    books = books.map((book) => book.author_id);
    console.log(books)
    // const authors =await authorModel.find({author_id:{$in: books}});
    // let authorName =authors.map((name)=> name.author_name);
    res.send(authorName);

}


// Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written by the author with an id <Author_Id>. Only return the names of these books

let bookBYAuthID = async function (req, res) {
    let input = req.params.id
    let books = await booksDataModel.find({ author_id: input },).select({ name: 1, _id: 0 })
    res.send(books)
}


// Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. Only include the author’s names and their ages in the response for this api

let findByRating = async function (req, res) {
    let rating = await booksDataModel.find({ rating: { $gt: 4 } }).select({ author_id: 1, _id: 0 })
    let id = rating.map(function (ele) { return ele.author_id })
    let name = await authorModel.find({ $and: [{ age: { $gt: 50 } }, { author_id: id }] })
        .select({ author_name: 1, age: 1, _id: 0 })
    res.send(name)
}


module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.booksByChetanBhagat = booksByChetanBhagat
module.exports.updateBookPrice = updateBookPrice
module.exports.priceRange = priceRange
module.exports.bookBYAuthID = bookBYAuthID
module.exports.findByRating = findByRating


