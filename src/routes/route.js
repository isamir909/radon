const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middelware=require("../middleware/token")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",middelware.hederTokenAuthenticate, middelware.userAuthenticate, userController.getUserData)

router.put("/users/:userId",middelware.hederTokenAuthenticate, middelware.userAuthenticate,userController.updateUser)

router.delete("/users/:userId",middelware.hederTokenAuthenticate, middelware.userAuthenticate, userController.deleteUser)

module.exports = router;