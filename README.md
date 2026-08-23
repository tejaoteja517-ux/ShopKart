🛍️ ShopKart — Full-Stack E-Commerce Web Application
A modern full-stack e-commerce demo built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, covering the complete shopping journey from product discovery to order tracking.

✨ Overview
ShopKart is a full-stack e-commerce application designed to demonstrate a realistic online shopping workflow.

The application supports:

Home → Product Details → Cart → Login/Signup → Delivery Address → Payment → Order Confirmation → Track Order → My Orders

It combines a responsive frontend with a REST-style backend, MongoDB data storage, JWT authentication, and a simple checkout system.

🚀 Key Features
🛒 Shopping Experience
Browse products from the home page
View detailed product information
Add and remove products from the cart
Cart persistence using browser localStorage
Cart survives page refreshes
🔐 Authentication
User signup and login
JWT-based authentication
Protected backend routes
Authentication token stored in localStorage
Automatic Authorization: Bearer <token> requests
📍 Delivery & Checkout
Add and manage delivery addresses
Select a delivery address during checkout
Choose a payment method
Place orders with cart items and address details
📦 Order Management
Order confirmation page
Order history / My Orders
Order tracking timeline
Initial tracking stages:
Order Placed
Shipped
Out for Delivery
Delivered
🗄️ Backend & Database
Node.js + Express.js backend
MongoDB database integration
Mongoose models
JWT authentication middleware
API routes for users, products, addresses, and orders
Seed script for sample products
🧰 Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Database	MongoDB
ODM	Mongoose
Authentication	JSON Web Token (JWT)
Client Storage	Browser localStorage
Development	Nodemon
API Style	REST-style endpoints
📁 Project Structure
ShopKart/
│
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   │
│   ├── middleware/
│   │   └── auth.js               # JWT authentication middleware
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Address.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── auth.js               # Authentication APIs
│   │   ├── products.js           # Product APIs
│   │   ├── addresses.js          # Address APIs
│   │   └── orders.js             # Order APIs
│   │
│   ├── server.js                 # Express application entry point
│   ├── seed.js                   # Sample product seeder
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── index.html                # Home / product listing
│   ├── product.html              # Product details
│   ├── cart.html                 # Shopping cart
│   ├── login.html                # Login
│   ├── signup.html               # Signup
│   ├── address.html              # Delivery address
│   ├── payment.html              # Payment
│   ├── confirmation.html         # Order confirmation
│   ├── track-order.html          # Order tracking
│   ├── orders.html               # Order history
│   │
│   ├── css/
│   │   └── style.css             # Application styles
│   │
│   └── js/
│       └── api.js                # API, cart & authentication helpers
│
└── README.md
⚙️ Getting Started
1. Prerequisites
Make sure the following are installed:

Node.js
npm
MongoDB locally or a MongoDB Atlas database
A modern web browser
2. Clone the Repository
git clone <your-repository-url>
cd ecommerce-app
3. Configure the Backend
Open the backend directory:

cd backend
Create your environment file:

cp .env.example .env
On Windows, you can also create .env manually by copying .env.example.

Update .env with your MongoDB connection string and JWT secret:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
4. Install Dependencies
npm install
5. Seed Sample Products
Load the sample products into MongoDB:

npm run seed
6. Start the Application
For development:

npm run dev
The server runs at:

http://localhost:5000

Open the URL in your browser.

The Express server serves the frontend directly, so you do not need to run a separate frontend server.

🔄 Application Flow
┌───────────────┐
│   Home Page   │
└───────┬───────┘
        ↓
┌───────────────┐
│Product Details│
└───────┬───────┘
        ↓
┌───────────────┐
│     Cart      │
└───────┬───────┘
        ↓
┌───────────────┐
│ Login / Signup│
└───────┬───────┘
        ↓
┌───────────────┐
│Delivery Address│
└───────┬───────┘
        ↓
┌───────────────┐
│    Payment    │
└───────┬───────┘
        ↓
┌───────────────┐
│Order Confirmed│
└───────┬───────┘
        ↓
┌───────────────┐
│ Track Order   │
└───────┬───────┘
        ↓
┌───────────────┐
│   My Orders   │
└───────────────┘
🔑 How the Application Works
🛒 Cart
The shopping cart is maintained in the browser using localStorage.

This makes the cart guest-friendly and allows cart items to remain available after refreshing the page.

🔐 Authentication
Authentication uses JWT.

After login, the JWT is stored in localStorage and attached to protected API requests using:

Authorization: Bearer <token>
💳 Checkout
Checkout requires authentication.

When an order is placed, the application sends:

Cart items
Selected delivery address
Payment method
to the backend.

📦 Orders & Tracking
The backend creates the order and initializes a tracking timeline:

Order Placed
      ↓
   Shipped
      ↓
Out for Delivery
      ↓
  Delivered
The current tracking status is static after order creation.

🌐 Main API Areas
Area	Purpose
/api/auth	User authentication
/api/products	Product operations
/api/addresses	Delivery address operations
/api/orders	Order creation and order management
🔒 Security Notes
JWT authentication is used for protected APIs.
Sensitive configuration should be stored in .env.
Never commit real MongoDB credentials or JWT secrets to GitHub.
Use a strong, unique JWT_SECRET in production.
📌 Current Limitations
This project is intentionally kept as an educational/demo application.

🚫 No product image upload system
🚫 No admin dashboard
🚫 No real payment gateway
🚫 No automatic stock reduction
🚫 No refresh-token mechanism
🚫 Order tracking does not automatically update
💡 Future Improvements
Possible enhancements include:

👨‍💼 Admin dashboard
📸 Product image upload
💳 Razorpay / Stripe payment integration
📦 Real-time order status updates
📊 Inventory and stock management
🔄 Refresh-token authentication
⭐ Product ratings and reviews
❤️ Wishlist functionality
🔎 Advanced product search and filtering
📱 Improved mobile responsiveness
📧 Email notifications for orders
☁️ Deployment using platforms such as Render, Railway, or Vercel
🎯 Learning Outcomes
This project demonstrates practical experience with:

Full-stack web development
REST API development
Node.js and Express.js
MongoDB and Mongoose
JWT authentication
CRUD operations
Frontend-backend integration
Browser localStorage
E-commerce application architecture
Git and GitHub workflow
👨‍💻 Project Purpose
ShopKart was developed as a full-stack e-commerce project to practice and demonstrate modern web development concepts, database integration, authentication, API development, and complete end-to-end shopping workflows.

⭐ Support
If you find this project useful, consider giving the repository a ⭐ Star on GitHub.

📄 License
This project is created for educational and demonstration purposes.