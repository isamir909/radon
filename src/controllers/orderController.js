const productModel = require("../models/productModel");
const userModel = require("../models/userModel")
const orderModel = require('../models/orderModel');


let createOrder = async function (req, res) {
    let productid = req.body.productId
    let userid = req.body.userId
    let headerInput = req.headers.isfreeappuser

    let authenticateProduct = await productModel.findById({ _id: productid })
    let authenticateUser = await userModel.findById({ _id: userid })

    if (!authenticateProduct) return res.send("productid not found")
    if (!authenticateUser) return res.send("user not found")

    if (headerInput == true) {


        let a = req.body
        let orderDetail = await orderModel.create(a)
        res.amount = 0
        return res.send({ data: orderDetail })

    }

    // console.log(headerInput)
    if (headerInput != true) {
        let amounts = await productModel.findById({ _id: productid }).select({ price: 1, _id: 0 })

        let userbalance = await userModel.findById({ _id: userid }).select({ balance: 1, _id: 0 })

        let balanceLeft = userbalance.balance - amounts.price

        if (balanceLeft >= 0) {

            updateUserBalance = await userModel.findOneAndUpdate({ _id: userid }, { $set: { balance: balanceLeft } })
            let b = req.body
            let orderDetails = await orderModel.create(b)
            return res.send({ data: orderDetails })
        }

        else { return res.send("you don't have sufficient balance") }


    }




}




module.exports.createOrder = createOrder
