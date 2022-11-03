const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.post("/createProduct", productController.ProductController);

router.post("/createUser", UserController.createUser);

router.post("/orderperchase", commonMW.mid1, orderController.orderpurchase);

router.post("/perchase", orderController.purchase);

module.exports = router;