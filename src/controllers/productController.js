const { count } = require("console")


const productModel=require("../models/productModel")


let createProduct= async function (req, res) {
    let Data = req.body
    let productData = await productModel.create(Data)
    return res.send({ data: productData })
}



module.exports.createProduct= createProduct
