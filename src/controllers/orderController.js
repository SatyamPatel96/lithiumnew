const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const UserModel = require("../models/userModel");

const orderpurchase = async function(req, res) {
    const order = req.body;
    const header = req.headers;
    const userid = await UserModel.findOne({ _id: order.userId });
    const productid = await productModel.findOne({ _id: order.productId });
    if (userid && productid) {
        if (header["isfreeappuser"] == "true") {
            await orderModel.create({ order });
            await orderModel.updateOne({ order }, { $set: { amount: 0 } }, { new: true });
            const orderdata = await orderModel.findOne({ order }).populate('userId').populate('productId');
            res.send({ yourorder: orderdata })
        } else {
            const Price = await productModel.findOne({ _id: order.productId }).select({ price: 1, _id: 0 });
            const Balance = await UserModel.findOne({ _id: order.userId }).select({ balance: 1, _id: 0 });
            if (Balance.balance >= Price.price) {
                await UserModel.updateOne({ _id: order.userId }, {
                    $set: {
                        balance: Balance.balance - Price.price
                    }
                }, { new: true });
                await orderModel.create({ order });
                await orderModel.updateOne({ order }, { $set: { amount: Price.price } }, { new: true });
                const neworder = await orderModel.findOne({ order }).populate('userId').populate('productId');
                res.send({ yourorder: neworder })

            } else {
                res.send({ ERROR: "error" })
            }
        }

    } else {
        res.send({ Error: "validation is failed" })
    }

};

// const purchase = async function(req, res) {
//     const data = req.body;
//     const header = req.headers;
//     if (header["isFreeAppUser"] == "true") {
//         await orderModel.updateOne({ data }, { $set: { isFreeAppUser: true } }, { new: true });
//         const order = await orderModel.find({ data }).populate('userId').populate('productId');
//         res.send({ yourorder: order })
//     } else {
//         const Price = await productModel.findOne({ _id: data.productId }).select({ price: 1 }, { _id: 0 });
//         const Balance = await UserModel.findOne({ _id: data.userId }).select({ balance: 1, _id: 0 });
//         if (Balance.balance >= Price.price) {
//             await UserModel.updateOne({ _id: data.userId }, {
//                 $inc: {
//                     balance: Balance.balance - Price.price
//                 }
//             }, { new: true });
//             await orderModel.updateOne({ data }, { $set: { amount: Price.price } }, { new: true });
//             const neworder = await orderModel.find({ data }).populate('userId').populate('productId');
//             res.send({ yourorder: neworder })

//         } else {
//             res.send(
//                 "error")
//         }
//     }
// }

module.exports.orderpurchase = orderpurchase;
module.exports.purchase = purchase;