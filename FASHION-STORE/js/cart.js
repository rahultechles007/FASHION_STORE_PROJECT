function showCart() {

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let html = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += Number(item.price);

        html += `

        <div class="bg-white p-4 rounded-xl mb-3">

            <h3 class="font-bold">
            ${item.name}
            </h3>

            <p>
            $${item.price}
            </p>

            <button
            onclick="removeCart(${index})"
            class="text-red-500 mt-2">

            Remove

            </button>

        </div>

        `;

    });

    $("#cartContainer").html(html);

    $("#cartTotal").text("$"+total);

}

function removeCart(index){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showCart();
}

$("#checkoutBtn").click(function(){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    orders.push(...cart);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order Placed");

    location.reload();

});