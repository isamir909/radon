const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


const authenticate = async function (req, res, next) {
   try {
       let token = req.headers["X-Auth-Token"];

    if (!token)  token = req.headers["x-auth-token"];

    if (!token) return res.status(400).send({ err: "tokent is not pesent" });

    let verifytoken = jwt.verify(token, "functionup-radon");
    if (!verifytoken) return res.status(400).send({ err: "invalid token" });

    let userId = req.params.userId
    let user = await userModel.findById(userId);

    if (!user) {
        return res.status(204).send("No such user exists");
    }

    next();

    } catch (error) {
        res.status(500).send({MSG:"error", err:error.message})
    }
 
}

const authorise = async function (req, res, next) {

    try {
        let logedinUser = req.headers["x-auth-token"]
        if (!logedinUser) logedinUser = req.headers["x-auth-token"];
      
        let decodeToken = jwt.verify(logedinUser, "functionup-radon")
      
        let userFromLogin = decodeToken.userId
        let userFromRequest = req.params.userId
    
        if (userFromLogin != userFromRequest) return res.status(401).send({ err: "login user is not authorised" })
    
     
        next();
    } catch (error) {
        res.status(500).send({MSG:"error", err:error.message})
    }
   


}


module.exports.authorise = authorise
module.exports.authenticate = authenticate