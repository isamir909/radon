const express = require('express');
const { route } = require('express/lib/application');
const { type, redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const bookAuthorHandller = require('../controllers/bookAuthorHandller')



router.post('/createAuthor', bookAuthorHandller.createAuthor)

router.post('/createBook', bookAuthorHandller.createBook)

router.post('/booksByChetanBhagat', bookAuthorHandller.booksByChetanBhagat);

router.post('/updateBookPrice', bookAuthorHandller.updateBookPrice)

router.post('/priceRange', bookAuthorHandller.priceRange);



// Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written by the author with an id <Author_Id>. Only return the names of these books


router.get('/books-by-authorid/:id', bookAuthorHandller.bookBYAuthID);

// Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. Only include the author’s names and their ages in the response for this api


router.get('/findByRating', bookAuthorHandller.findByRating);



module.exports = router;












// router.get('/findByRating', async function(req,res){
//     let author= await authorModel.find({age:{$gt:50}}).select( {author_id:1,_id:0})
//     let book = await booksDataModel.findOne({rating:{$gt:4}}).select()
//     {author_id:author.map(x)(x)}
//     authID=author.map((name) =>name)
// })




























