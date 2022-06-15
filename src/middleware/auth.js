const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


const authenticate = async function (req, res, next) {

    let token = req.headers["X-Auth-Token"];

    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ err: "tokent is not pesent" });

    let verifytoken = jwt.verify(token, "functionup-radon");
    if (!verifytoken) return res.send({ err: "invalid token" });

    let userId = req.params.userId
    let user = await userModel.findById(userId);

    if (!user) {
        return res.send("No such user exists");
    }

    next();

}

const authorise = async function (req, res, next) {

    let logedinUser = req.headers["x-auth-token"]
    if (!logedinUser) logedinUser = req.headers["x-auth-token"];
  
    let decodeToken = jwt.verify(logedinUser, "functionup-radon")
  
    let userFromLogin = decodeToken.userId
    let userFromRequest = req.params.userId

    if (userFromLogin != userFromRequest) return res.send({ err: "login user is not authorised" })

    // let user = await userModel.findById(userFromRequest)
    // if (!user) return res.send({ status: false, msg: 'No such user exists' })

    next();


}


module.exports.authorise = authorise
module.exports.authenticate = authenticate