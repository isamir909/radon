const express = require('express');
const logger =require('../logger/logger')  //imported welcome from logger.js
const utill=require('../utill/helper')
const validator=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(logger.url)

    console.log(utill.date + "/"+ utill.month)
   console.log(utill.bInfo)

   console.log(validator.trim)
   console.log(validator.uppercase)
   console.log(validator.lowercase)

    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason