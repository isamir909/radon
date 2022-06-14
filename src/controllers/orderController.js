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
    if (!authenticateUser) return res.send("user  fnotound")
    console.log(headerInput)
    if (headerInput == "true") {
        
        let a = req.body
        Object.assign(a,{amount:0})
        // console.log(a)
        let orderDetail = await orderModel.create(a)
        
        return res.send({ data: orderDetail })

    }

   
    if (headerInput == "false") {
        let amounts = await productModel.findById({ _id: productid }).select({ price: 1, _id: 0 })

        let userbalance = await userModel.findById({ _id: userid }).select({ balance: 1, _id: 0 })

        let balanceLeft = userbalance.balance - amounts.price

        if (balanceLeft >= 0) {

            updateUserBalance = await userModel.findOneAndUpdate({ _id: userid }, { $set: { balance: balanceLeft } })
            let b = req.body
        //   to send data without getting user input and sending to database
            Object.assign(b,{amount:amounts.price})
            let orderDetails = await orderModel.create(b)
            return res.send({ data: orderDetails })
        }

        else { return res.send("you don't have sufficient balance") }


    }




}




module.exports.createOrder = createOrder
