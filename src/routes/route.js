const express = require('express');
const Module = require('../logger/logger')  //imported welcome from logger.js
const helper = require('../utill/helper')
const formatter = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {

    // console.log  (logger.url)
    Module.welcome();

    helper.date();
    helper.month();
    helper.info();
    formatter.lowCase();
    formatter.trimText();
    formatter.upperCaseMe();
    res.send('My first ever api Assignment')
});


module.exports = router;
// adding this comment for no reason