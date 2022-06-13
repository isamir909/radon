const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');
const middelware = require("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")
const orderController = require("../controllers/orderController")



router.post("/createProduct", productController.createProduct)

router.post("/createUser", middelware.middelware, userController.createUser)

router.post("/createOrder", middelware.middelware, orderController.createOrder);


module.exports = router;