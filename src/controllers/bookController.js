
const newAuthorModel = require("../models/authorModel")
const newBookModel = require("../models/bookModel")

const newPublisherModel = require("../models/publisherModel")
const mongoose= require('mongoose')
const res = require("express/lib/response")
const bookModel = require("../models/bookModel")
ObjectId = mongoose.Schema.Types.ObjectId



const createBook =async function (req,res){
    let book=req.body
    if (req.body.author_id=="" && req.body.publisher_id) return res.send({msg:"author and publisher id is required"})
let authorid=req.body.author_id
let publisherid=req.body.publisher_id

let authorList =await newAuthorModel.findById({_id:authorid})
let publisherList = await newPublisherModel.findById({_id:publisherid})

if(!authorList) return res.send({msg:"aUTHOR ID NOT FOUND"})
if(!publisherList) return res.send({msg:"PUBLISHER ID NOT FOUND"})

let bookCreated = await newBookModel.create(book)
res.send({msg:bookCreated})
}
       


let getBooksData=async function(req,res){
    let bookList= await newBookModel.find().populate('author_id')
    let bookLists= await newBookModel.find().populate('publisher_id')
res.send({data:bookList,bookLists})
}

// Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.


let addAttribute =async function(req,res){

   
let Penguin =await newBookModel.updateMany({publisher_id:"62a28e331250d2ed5c7e98c1"},
                    {$set:{isHardCover:true}},
                    {new:true,upsert:true})
                    res.send(Penguin)
            
 let HarperCollins =await newBookModel.updateMany({publisher_id:"62a28e5d1250d2ed5c7e98c7"},
                    {$set:{isHardCover:true}},
                    {new:true,upsert:true})

              
                    res.send(HarperCollins)
                    


}


let rating =async function(req,res){
    
    let updates= await newBookModel.find({rating:{$gt:(3.5)}}).select({_id:0,price:1}).updateMany({price},
        {$set: {$inc:{price:+10}}},
        {new:true})
    
    res.send(updates)
}

      


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.addAttribute = addAttribute
module.exports.rating = rating








// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
