// DOM Elements
const pages = document.querySelectorAll('.page');
const registerPage = document.getElementById('register-page');
const loginPage = document.getElementById('login-page');
const homePage = document.getElementById('home-page');

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const deleteConfirmForm = document.getElementById('delete-confirm-form');

const showLoginLink = document.getElementById('show-login');
const showRegisterLink = document.getElementById('show-register');
const logoutBtn = document.getElementById('logout-btn');
const deleteBtn = document.getElementById('delete-btn');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

// State Helpers
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Page Navigation
function showPage(pageElement) {
    pages.forEach(p => p.classList.remove('active'));
    pageElement.classList.add('active');
}

// Validation Helpers
function showError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector('.error-msg');
    input.classList.add('invalid');
    error.textContent = message;
}

function clearError(input) {
    const group = input.parentElement;
    const error = group.querySelector('.error-msg');
    input.classList.remove('invalid');
    error.textContent = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Router Logic
function updateAuthUI() {
    if (currentUser) {
        showPage(homePage);
    } else {
        // If not logged in but on a protected page, force login
        if (homePage.classList.contains('active')) {
            showPage(loginPage);
        }
    }
}

// Navigation Events
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(loginPage);
});

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(registerPage);
});

// Registration Logic
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Name must be at least 2 characters.');
        isValid = false;
    } else {
        clearError(nameInput);
    }
    
    // Email validation
    if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(emailInput);
    }
    
    // Password validation
    if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    if (isValid) {
        // Store account details
        const userData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value // Stored locally for this example project
        };
        localStorage.setItem('userAccount', JSON.stringify(userData));
        
        alert('Account created successfully! Please log in.');
        registerForm.reset();
        showPage(loginPage);
    }
});

// Login Logic
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    
    const storedAccount = JSON.parse(localStorage.getItem('userAccount'));
    
    if (!storedAccount || storedAccount.email !== emailInput.value.trim() || storedAccount.password !== passwordInput.value) {
        alert('Invalid email or password.');
    } else {
        // Set logged-in state
        currentUser = storedAccount;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        loginForm.reset();
        updateAuthUI();
    }
});

// Log Out Logic
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showPage(loginPage);
});

// Delete Account UI Trigger
deleteBtn.addEventListener('click', () => {
    deleteConfirmForm.classList.remove('hidden');
    deleteBtn.classList.add('hidden');
    logoutBtn.classList.add('hidden');
});

// Cancel Delete Logic
cancelDeleteBtn.addEventListener('click', () => {
    deleteConfirmForm.classList.add('hidden');
    deleteBtn.classList.remove('hidden');
    logoutBtn.classList.remove('hidden');
    deleteConfirmForm.reset();
    document.getElementById('delete-error').textContent = '';
});

// Confirm Delete Account Logic
deleteConfirmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('delete-email');
    const passwordInput = document.getElementById('delete-password');
    const errorMsg = document.getElementById('delete-error');
    
    const storedAccount = JSON.parse(localStorage.getItem('userAccount'));
    
    if (storedAccount && storedAccount.email === emailInput.value.trim() && storedAccount.password === passwordInput.value) {
        // Delete User
        localStorage.removeItem('userAccount');
        localStorage.removeItem('currentUser');
        currentUser = null;
        
        alert('Your account has been permanently deleted.');
        deleteConfirmForm.classList.add('hidden');
        deleteBtn.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
        deleteConfirmForm.reset();
        showPage(registerPage);
    } else {
        errorMsg.textContent = 'Incorrect email or password.';
    }
});

// Check auth state on load
updateAuthUI();
