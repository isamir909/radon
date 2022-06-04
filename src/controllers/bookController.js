const BookModel= require("../models/bookModel")

const storeData= async function(req,res){
    let Data=req.body
    let saveData = await BookModel.create(Data)
    res.send(saveData)
}

const getBookData = async function(req,res){
    let allBooksData= await BookModel.find()
    res.send({msg:allBooksData})
}

module.exports.storeData=storeData
module.exports.getBookData=getBookData
















// const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData