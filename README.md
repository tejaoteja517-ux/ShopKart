# 🛍️ ShopKart — Full-Stack E-Commerce Web Application

A modern **full-stack e-commerce web application** built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.

ShopKart demonstrates a complete online shopping workflow, including product browsing, authentication, cart management, delivery addresses, checkout, order placement, order history, and order tracking.

---

## ✨ Overview

**ShopKart** is an educational full-stack e-commerce project designed to demonstrate how a frontend application communicates with a backend REST API and a MongoDB database.

### 🔄 Complete Shopping Flow

```text
Home
  ↓
Product Details
  ↓
Shopping Cart
  ↓
Login / Signup
  ↓
Delivery Address
  ↓
Payment
  ↓
Order Confirmation
  ↓
Track Order
  ↓
My Orders
🚀 Key Features
🛒 Shopping Experience
Browse available products
View product details
Add products to cart
Remove products from cart
Update cart items
Persistent cart using browser localStorage
Cart remains available after page refresh
Product search and browsing
🔐 Authentication
User registration
User login
JWT-based authentication
Protected backend routes
Authentication token stored in localStorage
Automatic Authorization: Bearer token handling
📍 Delivery & Checkout
Add delivery address
Manage saved addresses
Select delivery address during checkout
Select payment method
Place orders using cart items
Checkout requires authentication
📦 Order Management
Order confirmation
View previous orders
My Orders page
Order details
Order tracking timeline
Initial order tracking stages:
Order Placed
      ↓
   Shipped
      ↓
Out for Delivery
      ↓
  Delivered
🗄️ Backend & Database
Node.js backend
Express.js REST API
MongoDB database
Mongoose ODM
JWT authentication
CRUD operations
API routes for authentication, products, addresses, and orders
Sample product seed script
🧰 Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Database	MongoDB
ODM	Mongoose
Authentication	JSON Web Token (JWT)
Client Storage	Browser localStorage
API Style	REST API
Development Tool	Nodemon
Version Control	Git & GitHub
📁 Project Structure
ShopKart/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Address.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── addresses.js
│   │   └── orders.js
│   │
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   │
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── signup.html
│   ├── address.html
│   ├── payment.html
│   ├── confirmation.html
│   ├── track-order.html
│   ├── orders.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── api.js
│
├── .gitignore
└── README.md
⚙️ Getting Started

Follow the steps below to run ShopKart locally.

1️⃣ Prerequisites

Make sure the following software is installed on your computer:

Node.js
npm
MongoDB
Git
A modern web browser
Visual Studio Code (recommended)

You can use either:

MongoDB running locally
MongoDB Atlas
2️⃣ Clone the Repository

Clone the ShopKart repository from GitHub:

git clone https://github.com/tejaoteja517-ux/ShopKart.git

Move into the project directory:

cd ShopKart
3️⃣ Configure MongoDB

If you are using local MongoDB, make sure the MongoDB service is running.

The default local database connection can be:

mongodb://localhost:27017/ecommerce
4️⃣ Configure Environment Variables

Go to the backend directory:

cd backend

Create a .env file:

.env

Add the following configuration:

PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secure_jwt_secret
⚠️ Important

Never upload your real .env file to GitHub.

Your .gitignore should contain:

node_modules/
.env

Use .env.example to show other developers which environment variables are required.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
5️⃣ Install Backend Dependencies

Inside the backend folder, run:

npm install
6️⃣ Seed Sample Products

ShopKart includes a seed script for adding sample products to MongoDB.

Run:

npm run seed

If your project does not have a seed script, you can run:

node seed.js

After successful execution, sample products will be added to your MongoDB database.

7️⃣ Start the Backend Server

For development:

npm run dev

Or:

node server.js

The server should start on:

http://localhost:5000

You should see something similar to:

Server running on port 5000
MongoDB connected
🌐 Running the Application

The Express backend serves the frontend application.

Once the server is running, open:

http://localhost:5000

in your browser.

You do not need to run a separate frontend server if the Express server is configured to serve the frontend files.

🔄 Application Flow
┌─────────────────────┐
│      Home Page      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Product Details   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Shopping Cart     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Login / Signup    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Delivery Address    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│      Payment        │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Order Confirmation  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│    Track Order      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│     My Orders       │
└─────────────────────┘
🛒 How the Application Works
Cart

The shopping cart is maintained using browser localStorage.

This allows:

Cart persistence
Cart availability after page refresh
Guest users to maintain cart items
Cart data to remain in the browser
🔐 Authentication

ShopKart uses JWT (JSON Web Token) authentication.

After successful login, the authentication token is stored in:

localStorage

Protected API requests include the token using:

Authorization: Bearer <token>

This allows the backend to identify authenticated users.

📍 Delivery Address

Authenticated users can:

Add delivery addresses
Save address information
Select an address during checkout
Use the selected address when placing an order

Example address information includes:

Full Name
Mobile Number
House
Street
Area
City
State
ZIP Code
💳 Checkout

The checkout process requires user authentication.

When an order is placed, the frontend sends information such as:

Cart Items
Delivery Address
Payment Method

to the backend API.

The backend then creates an order and stores it in MongoDB.

📦 Order Management

After placing an order, users can:

View order confirmation
View order history
View individual order details
Track order status

The initial tracking stages are:

Order Placed
     ↓
  Shipped
     ↓
Out for Delivery
     ↓
 Delivered

Note: The current project uses a simplified/static tracking flow for demonstration purposes.

🌐 API Endpoints
Authentication
POST /api/auth/signup
POST /api/auth/login

Used for:

User registration
User login
Products
GET /api/products
GET /api/products/:id

Used for:

Fetching products
Viewing product details
Addresses
GET  /api/addresses
POST /api/addresses

Used for:

Fetching user addresses
Adding delivery addresses
Orders
POST /api/orders
GET  /api/orders
GET  /api/orders/:id

Used for:

Creating orders
Viewing order history
Viewing order details
🗃️ Database

ShopKart uses MongoDB as the primary database.

The main collections/models include:

Users
Products
Addresses
Orders
User

Stores user account information.

Product

Stores product information such as:

Name
Description
Price
Category
Image
Address

Stores delivery address information associated with users.

Order

Stores:

User
Cart Items
Delivery Address
Payment Method
Order Status
Order Date
🔒 Security

ShopKart follows basic security practices for an educational application.

Implemented
JWT authentication
Protected backend routes
Environment variables
Password authentication
Authorization middleware
Important

Never commit sensitive information such as:

MongoDB passwords
MongoDB connection credentials
JWT secrets
API keys
Private tokens

to GitHub.

📄 Environment Variables

The backend uses environment variables such as:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

Create your own .env file locally.

Do not commit .env to GitHub.

🚧 Current Limitations

This project is intentionally designed as an educational/demo application.

Currently, it does not include:

❌ Admin dashboard
❌ Real payment gateway
❌ Product image upload system
❌ Automatic stock reduction
❌ Refresh-token authentication
❌ Real-time order tracking
❌ Advanced inventory management
❌ Email notification system
💡 Future Improvements

Possible future enhancements include:

👨‍💼 Admin dashboard
📸 Product image upload
💳 Razorpay or Stripe integration
📦 Real-time order status updates
📊 Inventory and stock management
🔄 Refresh-token authentication
⭐ Product ratings and reviews
❤️ Wishlist functionality
🔎 Advanced search and filtering
📱 Improved mobile responsiveness
📧 Email order notifications
☁️ Cloud deployment
📈 Admin analytics dashboard
🎯 Learning Outcomes

This project helped demonstrate practical knowledge of:

Full-stack web development
Frontend development
Backend development
REST API development
Node.js
Express.js
MongoDB
Mongoose
JWT authentication
CRUD operations
Authentication and authorization
Frontend-backend integration
Browser localStorage
E-commerce application architecture
Git and GitHub
Database integration
🧪 Testing the Application

After starting the server, test the following flow:

Step 1

Open:

http://localhost:5000
Step 2

Browse the available products.

Step 3

Open a product and add it to the cart.

Step 4

Open the cart and verify the selected products.

Step 5

Create an account using the Signup page.

Step 6

Login using your account.

Step 7

Add a delivery address.

Step 8

Proceed to checkout.

Step 9

Select a payment method.

Step 10

Place the order.

Step 11

Check the order confirmation.

Step 12

Open My Orders and Track Order.

🛠️ Troubleshooting
MongoDB Connection Error

If you see:

MongooseError: The `uri` parameter to `openUri()` must be a string

check your .env file.

Make sure:

MONGO_URI=mongodb://localhost:27017/ecommerce

is present.

Also make sure your server loads environment variables:

require("dotenv").config();
Port Already in Use

If port 5000 is already being used, change the port in .env:

PORT=5001

Then restart the server.

Products Are Not Displaying

Check that:

MongoDB is running.
The backend server is running.
Sample products have been seeded.
The API is responding.
The frontend is using the correct API URL.

Example:

http://localhost:5000/api/products
📌 Project Status

🟢 Project Type: Educational Full-Stack E-Commerce Application

🟢 Backend: Node.js + Express.js

🟢 Database: MongoDB

🟢 Authentication: JWT

🟢 Frontend: HTML + CSS + JavaScript

🟢 Version Control: Git + GitHub

👨‍💻 Author

Teja O

Computer Science and Engineering Student

GitHub:
https://github.com/tejaoteja517-ux

⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ Star on GitHub.

Your support is appreciated!

📜 License

This project is created for educational and demonstration purposes.

You are free to use the project for learning and academic purposes.
