require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const sampleProducts = [

{
    name: "Wireless Headphones",
    description: "Bluetooth Noise Cancelling Headphones",
    price: 2999,
    category: "Electronics",
    image: "/images/headphone.jpg",
    rating: 4.8,
    reviews: 245
},

{
    name: "iPhone 15",
    description: "Apple Smartphone",
    price: 79999,
    category: "Electronics",
    image: "/images/iphone.jpg",
    rating: 4.9,
    reviews: 815
},

{
    name: "Gaming Laptop",
    description: "Intel i7 Laptop 16GB RAM",
    price: 69999,
    category: "Electronics",
    image: "/images/laptop.jpg",
    rating: 4.7,
    reviews: 302
},

{
    name: "Mechanical Keyboard",
    description: "RGB Mechanical Keyboard",
    price: 3499,
    category: "Electronics",
    image: "/images/keybord.jpg",
    rating: 4.6,
    reviews: 214
},

{
    name: "Gaming Mouse",
    description: "RGB Optical Mouse",
    price: 1499,
    category: "Electronics",
    image: "/images/mouse.jpg",
    rating: 4.5,
    reviews: 178
},

{
    name: "Bluetooth Speaker",
    description: "Portable Speaker",
    price: 2499,
    category: "Electronics",
    image: "/images/speaker.jpg",
    rating: 4.7,
    reviews: 198
},

{
    name: "Smart Watch",
    description: "Fitness Smart Watch",
    price: 4999,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    rating: 4.6,
    reviews: 291
},

{
    name: "Wireless Earbuds",
    description: "Noise Cancelling Earbuds",
    price: 1999,
    category: "Electronics",
    image: "/images/earbuds.jpg",
    rating: 4.5,
    reviews: 165
},

{
    name: "DSLR Camera",
    description: "Professional Camera",
    price: 45999,
    category: "Electronics",
    image: "/images/camera.jpg",
    rating: 4.8,
    reviews: 225
},

{
    name: "Men Watch",
    description: "Premium Analog Watch",
    price: 2999,
    category: "Fashion",
    image: "/images/watch.jpg",
    rating: 4.4,
    reviews: 132
},

{
    name: "Cotton T-Shirt",
    description: "100% Cotton Casual Wear",
    price: 699,
    category: "Fashion",
    image: "/images/tshirt.jpg",
    rating: 4.6,
    reviews: 189
},

{
    name: "Blue Jeans",
    description: "Slim Fit Jeans",
    price: 1499,
    category: "Fashion",
    image: "/images/jeans.jpg",
    rating: 4.5,
    reviews: 173
},

{
    name: "Leather Jacket",
    description: "Winter Jacket",
    price: 4999,
    category: "Fashion",
    image: "/images/jacket.jpg",
    rating: 4.7,
    reviews: 142
},

{
    name: "Running Shoes",
    description: "Lightweight Sports Shoes",
    price: 3499,
    category: "Footwear",
    image: "/images/shoes.jpg",
    rating: 4.7,
    reviews: 325
},

{
    name: "Sneakers",
    description: "Casual Sneakers",
    price: 2999,
    category: "Footwear",
    image: "/images/sneaker.jpg",
    rating: 4.6,
    reviews: 196
},
{
    name: "Leather Handbag",
    description: "Stylish Women's Handbag",
    price: 2599,
    category: "Bags",
    image: "/images/handbag.jpg",
    rating: 4.5,
    reviews: 176
},

{
    name: "Office Chair",
    description: "Ergonomic Chair",
    price: 7999,
    category: "Furniture",
    image: "/images/chair.jpg",
    rating: 4.7,
    reviews: 120
},

{
    name: "Study Table",
    description: "Wooden Study Table",
    price: 5999,
    category: "Furniture",
    image: "/images/table.jpg",
    rating: 4.6,
    reviews: 111
},

{
    name: "Coffee Mug",
    description: "Ceramic Coffee Mug",
    price: 399,
    category: "Home",
    image: "/images/mug.jpg",
    rating: 4.4,
    reviews: 93
},

{
    name: "LED Desk Lamp",
    description: "Adjustable Study Lamp",
    price: 1299,
    category: "Home",
    image: "/images/lamp.jpg",
    rating: 4.5,
    reviews: 107
},

{
    name: "Football",
    description: "Professional Football",
    price: 1199,
    category: "Sports",
    image: "/images/football.jpg",
    rating: 4.6,
    reviews: 138
},

{
    name: "Cricket Bat",
    description: "English Willow Cricket Bat",
    price: 4999,
    category: "Sports",
    image: "/images/cricketbat.jpg",
    rating: 4.8,
    reviews: 208
},

{
    name: "Yoga Mat",
    description: "Anti Slip Yoga Mat",
    price: 999,
    category: "Sports",
    image: "/images/yogamat.jpg",
    rating: 4.5,
    reviews: 121
},

{
    name: "Water Bottle",
    description: "1 Litre Stainless Steel Bottle",
    price: 499,
    category: "Sports",
    image: "/images/bottle.jpg",
    rating: 4.4,
    reviews: 84
}

];

async function seed() {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        await Product.deleteMany({});

        await Product.insertMany(sampleProducts);

        console.log("✅ 25 Products Inserted Successfully");

        await mongoose.disconnect();

    } catch (err) {

        console.error(err);

    }
}

seed();