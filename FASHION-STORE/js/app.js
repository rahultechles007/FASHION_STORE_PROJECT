// ========================================
// AUTHENTICATION
// ========================================

function isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
}

function getUser() {
    return JSON.parse(localStorage.getItem("user")) || null;
}

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}

// ========================================
// PAGE PROTECTION
// ========================================

function protectPage() {

    if (!isLoggedIn()) {

        window.location.href = "login.html";

    }
}

// ========================================
// USER INFO
// ========================================

function loadUserInfo() {

    const user = getUser();

    if (!user) return;

    if (document.getElementById("userName")) {
        document.getElementById("userName").innerText = user.name;
    }

    if (document.getElementById("userEmail")) {
        document.getElementById("userEmail").innerText = user.email;
    }
}

// ========================================
// CART
// ========================================

function getCart() {

    return JSON.parse(localStorage.getItem("cart")) || [];
}

function addToCart(product) {

    let cart = getCart();

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
}

function removeFromCart(index) {

    let cart = getCart();

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
}

function updateCartCount() {

    const cart = getCart();

    const count = cart.length;

    const badge = document.getElementById("cartCount");

    if (badge) {

        badge.innerText = count;

    }
}

// ========================================
// WISHLIST
// ========================================

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];
}

function addToWishlist(product) {

    let wishlist = getWishlist();

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();
}

function removeWishlist(index) {

    let wishlist = getWishlist();

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();
}

function updateWishlistCount() {

    const wishlist = getWishlist();

    const count = wishlist.length;

    const badge =
        document.getElementById("wishlistCount");

    if (badge) {

        badge.innerText = count;

    }
}

// ========================================
// ORDERS
// ========================================

function getOrders() {

    return JSON.parse(
        localStorage.getItem("orders")
    ) || [];
}

function placeOrder(order) {

    let orders = getOrders();

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );
}

// ========================================
// ADDRESS
// ========================================

function getAddresses() {

    return JSON.parse(
        localStorage.getItem("addresses")
    ) || [];
}

function saveAddress(address) {

    let addresses = getAddresses();

    addresses.push(address);

    localStorage.setItem(
        "addresses",
        JSON.stringify(addresses)
    );
}

// ========================================
// DASHBOARD COUNTS
// ========================================

function loadDashboardStats() {

    const cart =
        getCart().length;

    const wishlist =
        getWishlist().length;

    const orders =
        getOrders().length;

    const addresses =
        getAddresses().length;

    if ($("#cartItems").length)
        $("#cartItems").text(cart);

    if ($("#wishlistItems").length)
        $("#wishlistItems").text(wishlist);

    if ($("#totalOrders").length)
        $("#totalOrders").text(orders);

    if ($("#addressCount").length)
        $("#addressCount").text(addresses);
}

// ========================================
// INITIALIZE
// ========================================

$(document).ready(function () {

    loadUserInfo();

    updateCartCount();

    updateWishlistCount();

    loadDashboardStats();

});
////Login page 
localStorage.setItem(
    "loggedIn",
    "true"
);

window.location.href =
    "getstarted.html";


//Register page 
const user = {

    name: name,
    email: email,
    password: password

};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);

window.location.href =
    "login.html";

// Protect page

function protectPage(){

    const status =
    localStorage.getItem("loggedIn");

    if(status !== "true"){

        window.location.href =
        "login.html";

    }

}
