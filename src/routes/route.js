const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleware = require("../middleware/auth")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", middleware.mid1, userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleware.mid2, userController.getUserData)

router.put("/users/:userId", middleware.mid2, userController.updateUser)

router.put("/deletedata/:userId", middleware.mid2, userController.deleteuser)

module.exports = router;