const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },

            quantity: {
                type: Number,
                default: 1
            }
        }
    ],

    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "UPI", "CARD", "NETBANKING"],
        default: "COD"
    },
    paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"],
    default: "Pending"
},

    totalAmount: {
        type: Number,
        required: true
    },

    orderStatus: {
        type: String,
        enum: [
            "Ordered",
            "Packed",
            "Shipped",
            "Out for Delivery",
            "Delivered"
        ],
        default: "Ordered"
    },

    orderedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Order", orderSchema);