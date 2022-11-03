const productModel = require("../models/productModel");

const ProductController = async function(req, res) {
    const product = req.body;
    const productData = await productModel.create(product);
    res.send({ yourproduct: productData })
};
module.exports.ProductController = ProductController;