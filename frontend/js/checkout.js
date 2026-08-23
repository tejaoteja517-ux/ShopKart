const PRODUCT_API = "http://localhost:5000/api/products";
const ADDRESS_API = "http://localhost:5000/api/addresses";

const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "login.html?next=checkout.html";

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadCheckout() {

    // Load products
    const pRes = await fetch(PRODUCT_API);
    const products = await pRes.json();

    // Load address
    const aRes = await fetch(ADDRESS_API, {

        headers: {
            Authorization: "Bearer " + token
        }

    });

    const addresses = await aRes.json();

console.log("Addresses:", addresses);

console.log("Token:", token);

    if (addresses.length > 0) {

        const a = addresses[0];

        document.getElementById("addressBox").innerHTML = `
<b>${a.fullName}</b><br>

${a.house}, ${a.street}<br>

${a.area}<br>

${a.city}, ${a.state}<br>

${a.zip}<br>

📞 ${a.phone}
`;

    } else {

        document.getElementById("addressBox").innerHTML = `
            <button onclick="location.href='address.html'">
                Add Address
            </button>
        `;

    }

    let subtotal = 0;

    const box = document.getElementById("checkoutItems");

    box.innerHTML = "";

    cart.forEach(id => {

        const p = products.find(x => x._id === id);

        if (!p) return;

        subtotal += p.price;

        box.innerHTML += `

<div class="checkout-item">

<img src="${p.image}" class="checkout-image">

<div>

<h3>${p.name}</h3>

<p>₹${p.price.toLocaleString("en-IN")}</p>

</div>

</div>

`;

    });

    document.getElementById("subtotal").innerHTML =
        "₹" + subtotal.toLocaleString("en-IN");

    document.getElementById("total").innerHTML =
        "₹" + (subtotal + 99).toLocaleString("en-IN");

}

loadCheckout();