const container = document.getElementById('products-container');
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Network response failed'); 
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        container.innerHTML = `<p style="color: red;">Error loading products: ${error.message}</p>`;
    }
}
function renderProducts(products) {
    let htmlContent = '';
    products.forEach(product => {
    htmlContent += `
        <div class="product-card">
        <div class="image-container">
            <img class="product-image" src="${product.image}" alt="${product.title}">
        </div>
    <span class="product-category">${product.category}</span>
    <h2 class="product-title">${product.title}</h2>
    <p class="product-description">${product.description}</p>
        <div class="product-meta">
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <span class="product-rating">⭐ ${product.rating.rate} (${product.rating.count})</span>
        </div>
    </div>
    `;
    });
    container.innerHTML = htmlContent;
}
fetchProducts();