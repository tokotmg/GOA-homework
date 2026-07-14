        document.getElementById("login-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Validate credentials
            const validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                localStorage.setItem("currentUser", username);
                alert("Login successful!");
                window.location.href = "homework192.html";
            } else {
                alert("Invalid username or password.");
            }
        });