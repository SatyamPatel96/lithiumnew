const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "newUsers"
    },
    productId: {
        type: ObjectId,
        ref: "products"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: Date
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)