const userModel = require("../models/userModel")


let createUser = async function (req, res) {

    let data = req.body
    let createuser = await userModel.create(data)

    return res.send({ data: createuser })

}


module.exports.createUser = createUser
