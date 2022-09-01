const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {validateToken, checkIfAuthorized} = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", validateToken, checkIfAuthorized, userController.getUserData)

//router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", validateToken, checkIfAuthorized, userController.updateUser)

router.delete('/users/:userId', validateToken, checkIfAuthorized, userController.deleteUser)

module.exports = router;