// Local Database & State Init
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([])); 
}

let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let productsCache = [];

// App Router Engine
function navigateTo(view, param = null) {
    const main = document.getElementById('main-content');
    const template = document.getElementById(`view-${view}`);
    
    if (!template) return;
    
    // Inject clean copy of view template html
    main.innerHTML = template.innerHTML;
    updateHeader();

    // Trigger View Specific Data Actions
    if (view === 'home') loadHomeView();
    if (view === 'detail' && param) loadDetailView(param);
}

// Global Header Rendering Control
function updateHeader() {
    const nav = document.getElementById('nav-auth-controls');
    if (currentUser) {
        nav.innerHTML = `
            <div class="nav-user">
                <span>Hello, <strong>${currentUser.username}</strong></span>
                <button class="btn btn-secondary" onclick="handleLogout()">Log out</button>
            </div>`;
    } else {
        nav.innerHTML = `
            <div class="nav-user">
                <button class="btn btn-secondary" onclick="navigateTo('login')">Log In</button>
                <button class="btn btn-primary" onclick="navigateTo('register')">Register</button>
            </div>`;
    }
}

// Authentication Controller Functions
function handleRegister(e) {
    e.preventDefault();
    const user = document.getElementById('reg-user').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value;

    let users = JSON.parse(localStorage.getItem('users'));
    if (users.some(u => u.username === user)) {
        alert('Username is already taken!');
        return;
    }

    users.push({ username: user, email: email, password: pass });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    navigateTo('login');
}

function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;

    let users = JSON.parse(localStorage.getItem('users'));
    const matchedUser = users.find(u => u.username === user && u.password === pass);

    if (matchedUser) {
        currentUser = { username: matchedUser.username };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        navigateTo('home');
    } else {
        alert('Invalid credentials match! Please check your input.');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    navigateTo('home');
}

// View Operations & Data Pipeline
async function loadHomeView() {
    const grid = document.getElementById('products-grid');
    
    if (productsCache.length === 0) {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            productsCache = await response.json();
        } catch (error) {
            grid.innerHTML = `<p style="color: red;">Error retrieving product library catalog.</p>`;
            return;
        }
    }

    grid.innerHTML = productsCache.map(product => `
        <div class="product-card" onclick="navigateTo('detail', ${product.id})">
            <div class="product-img-wrapper">
                <img src="${product.image}" class="product-img" alt="${product.title}">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
    `).join('');
}

async function loadDetailView(id) {
    const contentArea = document.getElementById('product-detail-content');
    contentArea.innerHTML = "Loading item information details...";

    // Find locally inside cached entries or make target query 
    let product = productsCache.find(p => p.id === id);
    if (!product) {
        try {
            const response = await fetch(`https://fakestoreapi.com{id}`);
            product = await response.json();
        } catch (error) {
            contentArea.innerHTML = `<p style="color: red;">Failed to parse product specifications data record.</p>`;
            return;
        }
    }

    contentArea.innerHTML = `
        <div class="detail-img-wrapper">
            <img src="${product.image}" class="detail-img" alt="${product.title}">
        </div>
        <div class="detail-info">
            <div class="detail-meta">
                <span class="category-tag">${product.category}</span>
                <span class="rating">★ ${product.rating?.rate || 'N/A'} (${product.rating?.count || 0} reviews)</span>
            </div>
            <h1>${product.title}</h1>
            <p class="detail-desc">${product.description}</p>
            <div class="product-price" style="font-size: 2rem; margin-bottom: 2rem;">$${product.price.toFixed(2)}</div>
            <button class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem;">Add to Cart</button>
        </div>
    `;
}

// Initial Bootstrapping Entry Point
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
