        document.getElementById("register-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("reg-username").value.trim();
            const password = document.getElementById("reg-password").value;

            // Get existing users or initialize empty array
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if user already exists
            const userExists = users.some(user => user.username === username);
            if (userExists) {
                alert("Username already taken!");
                return;
            }

            // Save new user
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! Redirecting to login...");
            window.location.href = "login.html";
        });