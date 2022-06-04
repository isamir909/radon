const express = require('express')
const router =express.Router();
const BookModel=require('../models/bookModel')
const bookController=require('../controllers/bookController')


router.get("/test-me",function (req,res){
    res.send("mu Book APi")
});

router.post("/storeData", bookController.storeData)

router.post("/getBookData", bookController.getBookData)

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// module.exports = router;