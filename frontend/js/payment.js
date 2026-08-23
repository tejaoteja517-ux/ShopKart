const ORDER_API = "http://localhost:5000/api/orders";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html?next=payment.html";
}
async function placeOrder() {

    const paymentMethod =
        document.querySelector("input[name='payment']:checked").value;

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    // Convert cart to backend format
    const orderItems = cart.map(item => ({
        product: item.productId,
        quantity: item.qty
    }));

    try {
        console.log(cart);
console.log(orderItems);

        const res = await fetch(ORDER_API, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },

            body: JSON.stringify({

                items: orderItems,

                paymentMethod

            })

        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        localStorage.removeItem("cart");

        window.location.href =
            "success.html?id=" + data.order._id;

    } catch(err){

    console.error(err);

    alert(err.message);

}

}