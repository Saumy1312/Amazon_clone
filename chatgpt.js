// Toggle Dropdown Menu
const dropdown = document.querySelector(".nav-dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove("show");
    }
});

// Search Functionality
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
    alert(`Searching for: ${searchInput.value}`);
});

// Cart Update Simulation
const cart = document.querySelector(".nav-cart");
let cartCount = 0;

cart.addEventListener("click", () => {
    cartCount++;
    cart.innerHTML = `<i class='fas fa-shopping-cart'></i> Cart (${cartCount})`;
    alert("Item added to cart!");
});
