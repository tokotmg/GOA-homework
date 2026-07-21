// Handles views visibility switches globally
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
    document.getElementById(`${viewId}-view`).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Global update for Header Navigation UI
function updateNavbar() {
    const navLinks = document.getElementById('nav-links');
    const loggedInUser = localStorage.getItem('currentUser');
    
    if (loggedInUser) {
        navLinks.innerHTML = `
            <span>Hello, <strong>${loggedInUser}</strong></span>
            <a onclick="showView('home')">Home</a>
            <a onclick="showView('cart')">Cart</a>
            <a onclick="logout()" class="btn btn-secondary" style="padding: 6px 12px; margin-left:15px;">Log out</a>
        `;
    } else {
        navLinks.innerHTML = `
            <a onclick="showView('home')">Home</a>
            <a onclick="showView('login')">Log in</a>
            <a onclick="showView('register')" class="btn" style="padding: 6px 12px; margin-left:15px; color:white;">Register</a>
        `;
    }
}

// User Registration
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('reg-username').value.trim();
    const pass = document.getElementById('reg-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === user)) {
        alert('Username already exists!');
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    document.getElementById('register-form').reset();
    showView('login');
});

// User Login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('login-username').value.trim();
    const pass = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(u => u.username === user && u.password === pass);

    if (validUser) {
        localStorage.setItem('currentUser', user);
        updateNavbar();
        document.getElementById('login-form').reset();
        showView('home');
    } else {
        alert('Invalid credentials!');
    }
});

// User Logout
function logout() {
    localStorage.removeItem('currentUser');
    updateNavbar();
    showView('home');
}

// Initialize navbar rendering on application load
updateNavbar();
