const express = require('express');
const { route } = require('express/lib/application');
const { type, redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const bookAuthorHandller=require('../controllers/bookAuthorHandller')



router.post('/createAuthor',bookAuthorHandller.createAuthor )

router.post('/createBook',bookAuthorHandller.createBook )

router.post('/booksByChetanBhagat', bookAuthorHandller.booksByChetanBhagat);

router.post('/updateBookPrice',bookAuthorHandller.updateBookPrice)

router.post('/priceRange', bookAuthorHandller.priceRange);



module.exports = router;










































