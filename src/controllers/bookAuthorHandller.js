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
    // console.log(iD)
    let bookdata= await booksDataModel.find({author_id:iD[0].author_id})
    res.send({msg:bookdata})
}


let updateBookPrice=async function(req,res){
    let book=await booksDataModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    // console.log(book)
    let authorData= await authorModel.find({author_id:book.author_id}).select("author_name")
    let price=book.price
    res.send({msg:authorData,price})
}


let priceRange = async function(req,res){
    let books = await booksDataModel.find({price:{$gte:50,$lte:100}}).select({author_id:1});
    //  console.log(books)
    books =books.map((book)=> book.author_id);
    const authors =await authorModel.find({author_id:{$in: books}});
    let authorName =authors.map((name)=> name.author_name);
   res.send(authorName);
      
  }




module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.booksByChetanBhagat=booksByChetanBhagat
module.exports.updateBookPrice=updateBookPrice
module.exports.priceRange=priceRange


