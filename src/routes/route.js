const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController =require('../controllers/PublisherController')

router.post("/createAuthor", authorController.createAuthor  )

router.post("/creatPublisher",publisherController.createPublisher)


router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.put("/addAttribute", bookController.addAttribute)
router.put("/rating", bookController.rating)


module.exports = router;