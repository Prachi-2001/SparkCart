const mongoose = require("mongoose");
const productSchema = require("./product.model").productSchema;


const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cartItems: [{
        product: productSchema,
        quantity: Number,
        timestamps: true
    }, ],

}, {
    timestamps: false,
});

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports.Cart = Cart;