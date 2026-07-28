document.addEventListener("DOMContentLoaded", () => {
  // Registration
  const regForm = document.getElementById("register-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("reg-user").value;
      const p = document.getElementById("reg-pass").value;
      localStorage.setItem("user", JSON.stringify({ username: u, password: p }));
      alert("Registration successful!");
      window.location.href = "login.html";
    });
  }

  // Login
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("login-user").value;
      const p = document.getElementById("login-pass").value;
      const saved = JSON.parse(localStorage.getItem("user"));
      if (saved && saved.username === u && saved.password === p) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "shop.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  }

  // Product Loading
  const prodList = document.getElementById("product-list");
  if (prodList) {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        prodList.innerHTML = data.map(item => `
          <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title.substring(0, 20)}...</h4>
            <p>$${item.price}</p>
            <button class="btn" onclick="addToCart(${item.id}, '${item.title.replace(/'/g, "")}', ${item.price})">Add to Cart</button>
          </div>
        `).join("");
      });
  }

  // Cart Loading
  loadCart();
});

function addToCart(id, title, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = cart.find(i => i.id === id);
  if (found) {
    found.qty++;
  } else {
    cart.push({ id, title, price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function loadCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    if (totalEl) totalEl.innerText = "Total: $0.00";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `<div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:5px;">
      <span>${item.title} (x${item.qty})</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </div>`;
  }).join("");

  if (totalEl) totalEl.innerText = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}
