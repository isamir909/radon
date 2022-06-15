const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);

  res.send({ msg: savedData });
};

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
      organisation: "FUnctionUp",
    },
    "functionUp-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};



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
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};



const postMessage = async function (req, res) {

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}




let deleteUser = async function (req, res) {
  let userid = req.params.userId;

  let alreadyDeleted = await userModel.findOne({ _id: userid })
if (alreadyDeleted.isDeleted) return res.send({ msg: "user already deleted" })

  
    let idfounded = await userModel.findOneAndUpdate(
      { id: userid },
      { $set: { isDeleted: true } },
      { new: true }
    );
  return  res.send({ msg: "Deleted", data: idfounded });
    
 
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser











// let user = await userModel.findById(userId);
// //Return an error if no user with the given id exists in the db
// if (!user) {
//   return res.send("No such user exists");
// }




// postmessage

// let message = req.body.message
// // Check if the token is present
// // Check if the token present is a valid token
// // Return a different error message in both these cases
// let token = req.headers["x-auth-token"]
// if(!token) return res.send({status: false, msg: "token must be present in the request header"})
// let decodedToken = jwt.verify(token, 'functionup-radon')

// if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

// //userId for which the request is made. In this case message to be posted.
// let userToBeModified = req.params.userId
// //userId for the logged-in user
// let userLoggedIn = decodedToken.userId

// //userId comparision to check if the logged-in user is requesting for their own data
// if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

// let user = await userModel.findById(req.params.userId)
// if(!user) return res.send({status: false, msg: 'No such user exists'})
