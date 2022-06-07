const authorModel=require('../models/authorModel')
const booksDataModel=require('../models/bookModel')

let createAuthor=async function (req, res) {
    let authorData = req.body
    let Data = await authorModel.create(authorData)
    res.send(Data)
}


let createBook=async function (req, res) {
    let bookdata = req.body
    let Data = await booksDataModel.create(bookdata)
    res.send(Data)
}

let booksByChetanBhagat=async function(req,res){
    let iD= await authorModel.find({ author_name:"Chetan Bhagat"}).select({"author_id":1,_id:0})
    console.log(iD)
    let bookdata= await bookModel.find({author_id:iD[0].author_id})
    res.send({msg:bookdata})
}


let updateBookPrice=async function(req,res){
    let book=await booksDataModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    // console.log(book)
    let authorData= await authorModel.find({author_id:book.author_id}).select("author_name")
    let price=book.price
    res.send({msg:authorData,price})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.booksByChetanBhagat=booksByChetanBhagat
module.exports.updateBookPrice=updateBookPrice


