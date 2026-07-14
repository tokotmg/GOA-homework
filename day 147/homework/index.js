        document.addEventListener("DOMContentLoaded", () => {
            const currentUser = localStorage.getItem("currentUser");
            const guestControls = document.getElementById("guest-controls");
            const userControls = document.getElementById("user-controls");
            const welcomeMsg = document.getElementById("welcome-msg");
            const logoutBtn = document.getElementById("logout-btn");

            if (currentUser) {
                welcomeMsg.textContent = `Hello, ${currentUser}`;
                guestControls.classList.add("hidden");
                userControls.classList.remove("hidden");
            }

            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("currentUser");
                window.location.reload();
            });

            // 2. Fetch and Display Products
            const productList = document.getElementById("product-list");

            fetch("https://fakestoreapi.com/products")
                .then(res => res.json())
                .then(products => {
                    productList.innerHTML = ""; // Clear loading text
                    products.forEach(product => {
                        const card = document.createElement("div");
                        card.className = "product-card";
                        card.innerHTML = `
                            <img src="${product.image}" alt="${product.title}">
                            <h3>${product.title.substring(0, 20)}...</h3>
                            <p>$${product.price}</p>
                        `;
                        productList.appendChild(card);
                    });
                })
                .catch(err => {
                    productList.innerHTML = "Failed to load products.";
                    console.error(err);
                });
        });