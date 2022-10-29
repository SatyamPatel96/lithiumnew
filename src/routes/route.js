const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publishercontroller = require("../controllers/publishercontroller")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createpublisher", publishercontroller.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/Books", bookController.updatedata);

router.put("/price", bookController.updateprice)

module.exports = router;