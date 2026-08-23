const API = "/api/products";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadCart() {

    const res = await fetch(API);

    const products = await res.json();

    const cartItems = document.getElementById("cart-items");

    let subtotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2>Your cart is empty 😔</h2>
            <br>
            <a href="index.html">
                <button class="cart-btn">
                    Continue Shopping
                </button>
            </a>
        `;

        document.getElementById("subtotal").innerText = "₹0";
        document.getElementById("total").innerText = "₹0";

        return;
    }

    cartItems.innerHTML = "";

    const counts = {};

    cart.forEach(id => {
        counts[id] = (counts[id] || 0) + 1;
    });

    Object.keys(counts).forEach(id => {

        const product = products.find(p => p._id === id);

        if (!product) return;

        const qty = counts[id];

        subtotal += product.price * qty;

        cartItems.innerHTML += `

<div class="cart-card">

<img src="${product.image}" class="cart-image">

<div class="cart-info">

<h2>${product.name}</h2>

<p>${product.description}</p>

<div class="rating">

⭐ ${product.rating}

(${product.reviews} Reviews)

</div>

<h3>

₹${product.price.toLocaleString("en-IN")}

</h3>

<div class="qty-box">

<button onclick="changeQty('${id}',-1)">-</button>

<span>${qty}</span>

<button onclick="changeQty('${id}',1)">+</button>

</div>

<button

class="remove-btn"

onclick="removeItem('${id}')">

Remove

</button>

</div>

</div>

`;

    });

    document.getElementById("subtotal").innerText =
        "₹" + subtotal.toLocaleString("en-IN");

    document.getElementById("total").innerText =
        "₹" + (subtotal + 99).toLocaleString("en-IN");

}

function changeQty(id, value) {

    if (value === 1) {

        cart.push(id);

    } else {

        const index = cart.indexOf(id);

        if (index > -1) {

            cart.splice(index, 1);

        }

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

function removeItem(id) {

    cart = cart.filter(item => item !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

loadCart();