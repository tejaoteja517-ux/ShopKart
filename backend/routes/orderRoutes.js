const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const Order = require("../models/Order");
const Product = require("../models/Product");
const Address = require("../models/Address");


// =====================
// Place Order
// POST /api/orders
// =====================

router.post("/", auth, async (req, res) => {

    try {

        const { items, paymentMethod } = req.body;

        console.log("========== NEW ORDER ==========");
        console.log("User ID:", req.userId);
        console.log("Request Body:", req.body);

        if (!items || items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        // Get user's default address (or first address)
        const address = await Address.findOne({
            user: req.userId
        }).sort({ isDefault: -1 });

        console.log("Address:", address);

        if (!address) {
            return res.status(400).json({
                message: "Please add a delivery address"
            });
        }

        let total = 0;
        const orderItems = [];

        for (const item of items) {

            console.log("Processing Item:", item);

            const product = await Product.findById(item.product);

            if (!product) {
                console.log("Product not found:", item.product);
                continue;
            }

            const qty = item.quantity || 1;

            total += product.price * qty;

            orderItems.push({
                product: product._id,
                quantity: qty
            });
        }

        if (orderItems.length === 0) {
            return res.status(400).json({
                message: "No valid products found."
            });
        }

        console.log("Order Items:", orderItems);
        console.log("Total Amount:", total);

        const order = await Order.create({

            user: req.userId,

            items: orderItems,

            address: address._id,

            paymentMethod,

            totalAmount: total,

            paymentStatus:
                paymentMethod === "COD"
                    ? "Pending"
                    : "Paid"

        });

        console.log("Order Created:", order._id);

        res.status(201).json({

            success: true,

            message: "Order placed successfully",

            order

        });

    }

    catch (err) {

        console.error("ORDER ERROR:");
        console.error(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

});


// =====================
// My Orders
// GET /api/orders
// =====================

router.get("/", auth, async (req, res) => {

    try {

        const orders = await Order.find({

            user: req.userId

        })
        .populate("items.product")
        .populate("address")
        .sort({ orderedAt: -1 });

        res.json(orders);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

});


// =====================
// Get Single Order
// GET /api/orders/:id
// =====================

router.get("/:id", auth, async (req, res) => {

    try {

        const order = await Order.findOne({

            _id: req.params.id,

            user: req.userId

        })
        .populate("items.product")
        .populate("address");

        if (!order) {

            return res.status(404).json({

                message: "Order not found"

            });

        }

        res.json(order);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

});

module.exports = router;