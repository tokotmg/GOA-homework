const API_URL = 'https://fakestoreapi.com/products';
let allProducts = [];

// Fetch products from the public API
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        allProducts = await response.json();
        renderProducts(allProducts);
    } catch (error) {
        console.error("Error loading products:", error);
        document.getElementById('product-grid').innerHTML = '<p>Failed to load products.</p>';
    }
}

// Display products inside the home grid
function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(product => `
        <div class="card" onclick="viewProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h3>${product.title}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <button class="btn btn-secondary" style="width:100%" onclick="event.stopPropagation(); addToCartDirect(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Open Single Product Detail View
function viewProductDetails(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const detailsView = document.getElementById('product-details');
    detailsView.innerHTML = `
        <img src="${product.image}" class="details-image" alt="${product.title}">
        <div class="details-info">
            <p class="category">${product.category}</p>
            <h2>${product.title}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="desc">${product.description}</p>
            <div>
                <button class="btn" onclick="addToCartDirect(${product.id})">Add to Shopping Cart</button>
                <button class="btn btn-secondary" style="margin-left: 10px;" onclick="showView('home')">Back to Shop</button>
            </div>
        </div>
    `;
    showView('details');
}

// Helper to quickly handle adding straight from listing buttons
function addToCartDirect(id) {
    const product = allProducts.find(p => p.id === id);
    if (product) {
        addToCart(product);
    }
}

// Fire data call when the window finishes setting up
fetchProducts();
