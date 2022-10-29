const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel = require("../models/publisherModel");

const createBook = async function(req, res) {
    let book = req.body
    if (book.author_id && book.publisher_id) {
        let valid1 = await AuthorModel.findOne({
            _id: book.author_id
        });
        let valid2 = await PublisherModel.findOne({
            _id: book.publisher_id
        });
        if (valid1 && valid2) {
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })
        } else {
            res.send({ Error: " you entered here wrong author id or publisher id ,please enter valid author Id and publisher Id" })
        }
    } else {
        res.send({
            Error: "please enter the author id and publisher id both then send the request "
        })
    }
}

const getBooksData = async function(req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function(req, res) {
    let specificBook = await bookModel.find().select({ name: 1 }).populate('author_id', {
        age: 1,
        address: 1
    }).populate('publisher_id')
    res.send({ data: specificBook })

}

const updatedata = async function(req, res) {
    let a = await PublisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 });
    let b = a.map(ele => ele._id)
    let c = await bookModel.updateMany({
        publisher_id: { $in: b }
    }, {
        $set: {
            isHardCover: true
        }
    }, { new: true });
    res.send({ data: c })
}

const updateprice = async function(req, res) {
    let a = await AuthorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 });
    let b = a.map(ele => ele._id)
    let c = await bookModel.updateMany({
        author_id: { $in: b }
    }, {
        $inc: {
            price: 10
        }
    }, { new: true });
    res.send({ data: c })
}

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.updatedata = updatedata;
module.exports.updateprice = updateprice;