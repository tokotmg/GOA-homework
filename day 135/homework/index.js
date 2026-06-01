let usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];
function switchForm(targetForm) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    clearAllErrors();
    if (targetForm === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginTab.classList.add('active-tab');
        registerTab.classList.remove('active-tab');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        loginTab.classList.remove('active-tab');
        registerTab.classList.add('active-tab');
    }
}
function setError(inputElement, errorElementId, message) {
    inputElement.classList.add('invalid-input');
    document.getElementById(errorElementId).innerText = message;
}
function clearAllErrors() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error-msg');
    const messages = document.querySelectorAll('.global-msg');
    
    inputs.forEach(input => input.classList.remove('invalid-input'));
    errors.forEach(err => err.innerText = '');
    messages.forEach(msg => {
        msg.innerText = '';
        msg.style.display = 'none';
    });
}
function handleRegister(event) {
    event.preventDefault();
    clearAllErrors();
    const usernameInput = document.getElementById('reg-username');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-confirm');
    const globalMsg = document.getElementById('reg-global-msg');
    let isValid = true;
    if (usernameInput.value.trim().length < 3) {
        setError(usernameInput, 'reg-username-err', 'Username must be at least 3 characters long.');
        isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'reg-email-err', 'Please enter a valid email address.');
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        setError(passwordInput, 'reg-password-err', 'Password must be at least 6 characters long.');
        isValid = false;
    }
    if (passwordInput.value !== confirmInput.value) {
        setError(confirmInput, 'reg-confirm-err', 'Passwords do not match.');
        isValid = false;
    }
    const userExists = usersDatabase.some(user => user.username.toLowerCase() === usernameInput.value.trim().toLowerCase());
    if (userExists) {
        setError(usernameInput, 'reg-username-err', 'This username is already taken.');
        isValid = false;
    }
    if (!isValid) return;
    const newUser = {
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value // Stored as local plain text representation
    };
    usersDatabase.push(newUser);
    localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase));
    globalMsg.innerText = 'Registration successful! Transitioning to login...';
    globalMsg.style.display = 'block';
    document.getElementById('register-form').reset();

    setTimeout(() => {
        switchForm('login');
    }, 1500);
}
function handleLogin(event) {
    event.preventDefault();
    clearAllErrors();

    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const globalMsg = document.getElementById('login-global-msg');

    let isValid = true;
    if (usernameInput.value.trim() === '') {
        setError(usernameInput, 'login-username-err', 'Username cannot be empty.');
        isValid = false;
    }
    if (passwordInput.value === '') {
        setError(passwordInput, 'login-password-err', 'Password cannot be empty.');
        isValid = false;
    }

    if (!isValid) return;
    const matchedUser = usersDatabase.find(user => 
        user.username.toLowerCase() === usernameInput.value.trim().toLowerCase() && 
        user.password === passwordInput.value
    );
    if (matchedUser) {
        globalMsg.className = 'global-msg success';
        globalMsg.innerText = `Access Granted. Welcome back, ${matchedUser.username}!`;
        globalMsg.style.display = 'block';
        document.getElementById('login-form').reset();
    } else {
        // Obfuscated failure message prevents user enumeration vector vulnerabilities
        globalMsg.className = 'global-msg';
        globalMsg.style.backgroundColor = '#fff2f4';
        globalMsg.style.color = '#e41e3f';
        globalMsg.innerText = 'Invalid username or password configuration.';
        globalMsg.style.display = 'block';
    }
}
