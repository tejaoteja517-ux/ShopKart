const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        default: 4.5
    },

    reviews: {
        type: Number,
        default: 100
    },

    stock: {
        type: Number,
        default: 100
    }
});

module.exports = mongoose.model("Product", productSchema);