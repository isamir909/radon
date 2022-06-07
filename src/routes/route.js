const express = require('express');
const { route } = require('express/lib/application');
const { type, redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const authorModel = require('../models/authorModel');
// const bookModel = require('../models/bookModel');
const booksDataModel = require('../models/bookModel')
// const bookcontroller = require('../controllers/bookController')
const router = express.Router();
const bookAuthorHandller=require('../controllers/bookAuthorHandller')



router.post('/createAuthor',bookAuthorHandller.createAuthor )

router.post('/createBook',bookAuthorHandller.createBook )



router.post('/booksByChetanBhagat', bookAuthorHandller.booksByChetanBhagat);

router.post('/updateBookPrice',bookAuthorHandller.updateBookPrice)





// router.post('/priceRange', async function(req,res){
//     let bookPrice=await booksDataModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
//     // console.log(bookPrice)


// //     let auName=  bookPrice.map((author_name,author_id))==>{

// //     }
// // })



module.exports = router;










































