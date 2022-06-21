const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wetherController=require('../controllers/WetherController')
const memeController=require('../controllers/memeController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/district/date",CowinController.ByDistrictId)


router.get("/wether/data",wetherController.lundonWether)
router.get("/wether/data/sort",wetherController.getsortedTemp)

router.get("/meme/list",memeController.memeList)
router.post("/meme/create",memeController.createMeme)

module.exports = router;