function showWishlist(){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    let html = "";

    wishlist.forEach((item,index)=>{

        html += `

        <div class="bg-white p-4 rounded-xl mb-3">

            <h3 class="font-bold">
            ${item.name}
            </h3>

            <p>
            $${item.price}
            </p>

            <div class="flex gap-3 mt-3">

            <button
            onclick="moveToCart(${index})"
            class="bg-black text-white px-3 py-2 rounded">

            Add To Cart

            </button>

            <button
            onclick="removeWishlist(${index})"
            class="text-red-500">

            Remove

            </button>

            </div>

        </div>

        `;

    });

    $("#wishlistContainer").html(html);

}

function moveToCart(index){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(
        wishlist[index]
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    showWishlist();

}

function removeWishlist(index){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    showWishlist();

}