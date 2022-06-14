const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const hederTokenAuthenticate = function (req, res, next) {
  let token = req.headers["x-Auth-token"];

  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ err: "tokent is not pesent" });

  let verifytoken = jwt.verify(token, "functionup-radon-secretKey");
  if (!verifytoken) return res.send({ err: "invalid token" });
  next();
};



let userAuthenticate=async function (req,res,next) { 
        let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
next()
}


module.exports.hederTokenAuthenticate = hederTokenAuthenticate;
module.exports.userAuthenticate = userAuthenticate;
