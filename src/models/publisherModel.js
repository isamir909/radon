const mongoose= require('mongoose')
// const objectId = mongoose.Schema.type.objectId

const publisherSchema = new mongoose.Schema({
    name: String,
    headQuarter: String,
    
},{timestamps:true});

module.exports= mongoose.model('newPublisher',publisherSchema)