const express = require('express');
const { route } = require('express/lib/application');
const bookModel = require('../models/bookModel')
const bookcontroller = require('../controllers/bookController')
const router = express.Router();



// ====================createBook : to create a new entry..use this api to create 11+ entries in your collection============

router.post('/createBook', bookcontroller.createbookData);



// =================================bookList : gives all the books- their bookName and authorName only ===============================================================

router.post('/bookList', bookcontroller.bookslistdata);



// ======================getBooksInYear: takes year as input in post request and gives list of all books published that year==================


router.post('/getBooksInYear', bookcontroller.getBooksInYear);

// =======================================
// getParticularBooks:- (this is a good one, make sincere effort to solve this) 
// take any input and use it as a condition to fetch books that satisfy that condition
//          *e.g if body had { name: “hi”} then you would fetch the books with this name
//          *if body had { year: 2020} then you would fetch the books in this year
//          *hence the condition will differ based on what you input in the request body  ============================

router.post('/getParticularBooks',bookcontroller.getParticularBookslist);


// ================getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”=====================

router.post('/getXINRBooks',bookcontroller.getXINRBooks)




// =====================getRandomBooks - returns books that are available in stock or have more than 500 pages ===================

router.post('/getRandomBooks', bookcontroller.getRandomBooks);



module.exports = router;





























// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")


// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
