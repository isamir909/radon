const express = require('express');
const router = express.Router();





router.get("/testMe1",function(req,res){
    
res.send({msg:"Globle Middleware Assignment "})
})


router.get("/testMe2",function(req,res){
    res.send({msg:"Globle Middleware Assignment "})
    })
    

module.exports = router;