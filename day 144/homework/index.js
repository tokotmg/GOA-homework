const registerView = document.getElementById('registerView');
const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const toLoginLink = document.getElementById('toLogin');
const toRegisterLink = document.getElementById('toRegister');
const logoutBtn = document.getElementById('logoutBtn');
const userDisplay = document.getElementById('userDisplay');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
function showView(viewToShow) {
    [registerView, loginView, dashboardView].forEach(view => {
        view.classList.remove('active');
    });
    viewToShow.classList.add('active');
}
toLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showView(loginView);
});
toRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    showView(registerView);
});
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    if (localStorage.getItem(email)) {
        alert('This email is already registered!');
        return;
    }
    const userCredentials = { email: email, password: password };
    localStorage.setItem(email, JSON.stringify(userCredentials));
    alert('Registration successful! Redirecting to login...');
    registerForm.reset();
    showView(loginView);
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedUserData = localStorage.getItem(email);
    if (!storedUserData) {
        alert('Account not found. Please register first.');
        return;
    }
    const user = JSON.parse(storedUserData);
    if (user.password === password) {
        alert('Login successful!');
        loginForm.reset();
    
        localStorage.setItem('sessionUser', email);
        initSession();
    } else {
        alert('Incorrect password. Please try again.');
    }
});
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('sessionUser');
    showView(loginView);
});
function initSession() {
    const sessionUser = localStorage.getItem('sessionUser');
    if (sessionUser) {
        userDisplay.textContent = sessionUser;
        showView(dashboardView);
    } else {
        showView(loginView);
    }
}
initSession();