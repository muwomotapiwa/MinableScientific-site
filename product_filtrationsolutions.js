// Example Product Data
const products = [
    { id: 1, name: "Product 1", description: "Description 1", image: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Product 2", description: "Description 2", image: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Product 3", description: "Description 3", image: "https://via.placeholder.com/300x200" },
];

// Load All Products
function loadProducts() {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = products
        .map(
            (product) => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="content">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <div class="cta"><a href="#">View Details</a></div>
                </div>
            </div>
        `
        )
        .join("");
}

// Filter Products by Search Term
function filterProducts() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );
    const grid = document.getElementById("product-grid");
    grid.innerHTML = filtered
        .map(
            (product) => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="content">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <div class="cta"><a href="#">View Details</a></div>
                </div>
            </div>
        `
        )
        .join("");
}

// Load products on page load
window.onload = loadProducts;
