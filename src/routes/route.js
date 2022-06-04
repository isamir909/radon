const { request } = require('express');
const express = require('express');
const router = express.Router();
let data = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "Jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "Rahul",
        "dob": "2/2/1995",
        "gender": "male",
        "city": "surat",
        "sports": [
            "cricket"
        ]
    },
]

router.post("/players",function(req,res){
    // let c=Number(0)
    let a=req.body.key.value
    let b=req.body.dob
    let c=req.body.gender
    let d=req.body.sports
    let e=req.body.city
    console.log(a)

// if(a!=data){
//     data.push(a,b,c,d,e)
//     res.send(data)
// }

//      else{
//     res.send("player is already present", data)
//  }
});

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })




// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;