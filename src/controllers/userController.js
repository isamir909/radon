const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { findOne, findOneAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");

// create user databse
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

// user login

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon-secretKey"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

// get userdata

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};




const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: userData },
    { new: true }
  );
  res.send({ status: updatedUser, data: updatedUser });
};

let deleteUser = async function (req, res) {
  let userid = req.params.userId;
  let idfounded = await userModel.findOneAndUpdate(
    { id: userid },
    { $set: { isDeleted: true } },
    { new: true }
  );
  res.send({ msg: "Deleted", data: idfounded });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

// dltuser
// let tokens=req.headers["x-Auth-token"]
// if (!tokens) tokens= req.headers["x-auth-token"]

// if (!tokens) return res.send({err:"token is not present"})

// let userid=req.params.userId

// let user= await userModel.findById(userid)
// if (!user) return res.send ({err:"user not found"})

// getuserdata

// let token = req.headers["x-Auth-token"];
// if (!token) token = req.headers["x-auth-token"];

// if (!token) return res.send({ status: false, msg: "token must be present" });

// let decodedToken = jwt.verify(token, "functionup-radon-secretKey");
// if (!decodedToken)
//   return res.send({ status: false, msg: "token is invalid" })
