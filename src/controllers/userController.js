const UserModel = require("../models/userModel")

const createBook = async function(req, res) {
    let book = req.body
    let savedbook = await UserModel.create(book)
    res.send({ msg: savedbook })
}


const getBookData = async function(req, res) {
    let allbook = await UserModel.find()
    res.send({ msg: allbook })
}

module.exports.createBook = createBook
module.exports.getBookData = getBookData