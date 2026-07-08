const API_URL = 'https://fakestoreapi.com/products';
let currentUser = localStorage.getItem('currentUser') || null;
const navAuth = document.getElementById('nav-auth');
const logo = document.querySelector('.logo');
const pageHome = document.getElementById('page-home');
const pageLogin = document.getElementById('page-login');
const pageRegister = document.getElementById('page-register');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const productGrid = document.getElementById('product-grid');
const loadingEl = document.getElementById('loading');
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    document.getElementById(pageId).classList.add('active-page');
    if (pageId === 'page-home') {
        fetchProducts();
    }
}
function updateNavbar() {
    if (currentUser) {
        navAuth.innerHTML = `
            <span class="user-welcome">Hello, <strong>${currentUser}</strong></span>
            <button id="btn-logout" class="btn btn-secondary">Log out</button>
        `;
        document.getElementById('btn-logout').addEventListener('click', handleLogout);
    } else {
        navAuth.innerHTML = `
            <button id="btn-nav-login" class="btn btn-secondary">Log in</button>
            <button id="btn-nav-register" class="btn btn-primary">Register</button>
        `;
        document.getElementById('btn-nav-login').addEventListener('click', () => navigateTo('page-login'));
        document.getElementById('btn-nav-register').addEventListener('click', () => navigateTo('page-register'));
    }
}
async function fetchProducts() {
    try {
        loadingEl.style.display = 'block';
        productGrid.innerHTML = '';       
        const response = await fetch(API_URL);
        const products = await response.json();        
        loadingEl.style.display = 'none';
        renderProducts(products);
    } catch (error) {
        loadingEl.textContent = 'Failed to load products. Please try again later.';
        console.error('Error fetching data:', error);
    }
}
function renderProducts(products) {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
    `).join('');
}
function handleRegister(e) {
    e.preventDefault();
    const user = document.getElementById('reg-user').value.trim();
    const pass = document.getElementById('reg-pass').value;
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[user]) {
        alert('Username already exists!');
        return;
    }
    users[user] = pass;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    formRegister.reset();
    navigateTo('page-login');
}
function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[user] && users[user] === pass) {
        currentUser = user;
        localStorage.setItem('currentUser', user);
        updateNavbar();
        formLogin.reset();
        navigateTo('page-home');
    } else {
        alert('Invalid username or password.');
    }
}
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateNavbar();
    navigateTo('page-home');
}
function init() {
    formRegister.addEventListener('submit', handleRegister);
    formLogin.addEventListener('submit', handleLogin);
    document.getElementById('link-to-register').addEventListener('click', (e) => { e.preventDefault(); navigateTo('page-register'); });
    document.getElementById('link-to-login').addEventListener('click', (e) => { e.preventDefault(); navigateTo('page-login'); });
    logo.addEventListener('click', () => navigateTo('page-home'));
    updateNavbar();
    navigateTo('page-home');
}
document.addEventListener('DOMContentLoaded', init);
