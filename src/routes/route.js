const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wetherController=require('../controllers/WetherController')
const memeController=require('../controllers/memeController')




let lundonWether= async function(req,res){
try {
    let city=req.query.q
    let option={
        method:'get',
        url:` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da5ed95f881c4c5011281e43cc0a8902`

    }
    let result= await axios(option)
 
    let data=result.data
    
    let temp=data.main.temp_max
  
    res.status(200).send(  { city:city,temp:temp})
    
} catch (error) {
    res.status(500).send({err:error.message})
}


}


let getsortedTemp= async function(req,res){

let city= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

let a=[]
for(let i=0; i<city.length;i++){

let option={
    method:'get',
    url:` http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=da5ed95f881c4c5011281e43cc0a8902`
}

let result= await axios(option)
let tempdata=result.data.main.temp_max
let citydata=result.data.name

let final={city:citydata,temp:tempdata}
 a.push(final)
}

// console.log(a)
let sorted=a.sort(function(x,y){return  y.temp- x.temp})
// console.log(sorted)

res.status(200).send({data:sorted})
}



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