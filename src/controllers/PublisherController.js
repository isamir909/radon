let newPublisherModel=require('../models/publisherModel')

let createPublisher= async function(req,res){
    let input =req.body
    let publishercreate= await newPublisherModel.create(input)
    res.send({data:publishercreate})
}

module.exports.createPublisher=createPublisher