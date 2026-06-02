const images = [
  "https://images.pexels.com/photos/7255429/pexels-photo-7255429.jpeg",
  "https://images.pexels.com/photos/26316187/pexels-photo-26316187.jpeg",
  "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
];

let currentImage = 0;

const slider = document.getElementById("slider");

function changeSlide() {

    slider.style.opacity = "0";

    setTimeout(() => {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        slider.src = images[currentImage];

        slider.style.opacity = "1";

    }, 300);
}

setInterval(changeSlide, 4000);


// ===========================
// SEARCH FUNCTION
// ===========================

const searchBtn = document.querySelector("button");
const searchInput = document.querySelector('input[type="text"]');

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", () => {

        const value = searchInput.value.trim();

        if (value === "") {

            alert("Please enter a product name.");

            return;
        }

        alert(`Searching for: ${value}`);

    });

}


// ===========================
// NEWSLETTER SUBSCRIBE
// ===========================

const subscribeBtn = document.querySelector(
    'button[class*="rounded-xl"]'
);

const emailInput = document.querySelector(
    'input[type="email"]'
);

if (subscribeBtn && emailInput) {

    subscribeBtn.addEventListener("click", () => {

        const email = emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email.");

            return;
        }

        if (!email.includes("@")) {

            alert("Enter a valid email.");

            return;
        }

        alert("Successfully Subscribed!");

        emailInput.value = "";

    });

}


// ===========================
// CATEGORY CARD HOVER EFFECT
// ===========================

const cards = document.querySelectorAll(".category-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ===========================
// ADD TO CART BUTTONS
// ===========================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Product added to cart!");

    });

});


// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className =
    "fixed bottom-5 right-5 bg-[#198754] text-white w-12 h-12 rounded-full shadow-lg hidden z-50";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.remove("hidden");

    } else {

        topBtn.classList.add("hidden");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===========================
// NAVBAR ACTIVE LINK
// ===========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("text-[#198754]");
        });

        link.classList.add("text-[#198754]");

    });

});