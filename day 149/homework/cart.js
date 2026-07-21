let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add items to your cart
function addToCart(product) {
    // Check if user is authenticated
    if (!localStorage.getItem('currentUser')) {
        alert('Please log in first to use your shopping cart.');
        showView('login');
        return;
    }

    const targetItem = cart.find(item => item.id === product.id);
    if (targetItem) {
        targetItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveAndRenderCart();
    alert(`${product.title.substring(0, 20)}... added to your cart!`);
}

// Adjust amounts straight from input interactions
function changeQuantity(id, amt) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity = parseInt(amt);
    
    if (item.quantity <= 0 || isNaN(item.quantity)) {
        cart = cart.filter(item => item.id !== id);
    }
    
    saveAndRenderCart();
}

// Delete item entirely from list
function removeCartItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveAndRenderCart();
}

// Save active array contents to LocalStorage and trigger view update
function saveAndRenderCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Draw elements into Cart UI layout
function renderCart() {
    const listContainer = document.getElementById('cart-items-list');
    const summaryCard = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        listContainer.innerHTML = '<p class="empty-msg">Your shopping cart is currently empty.</p>';
        summaryCard.classList.add('hidden');
        return;
    }

    summaryCard.classList.remove('hidden');
    listContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" min="1" value="${item.quantity}" onchange="changeQuantity(${item.id}, this.value)">
                <button class="btn btn-secondary" style="padding: 5px 10px;" onclick="removeCartItem(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    // Compute Total Balance
    const aggregateTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerText = `$${aggregateTotal.toFixed(2)}`;
}

// Simple checkout placeholder logic
function checkout() {
    alert('Thank you for your purchase! Processing your checkout.');
    cart = [];
    saveAndRenderCart();
    showView('home');
}

// Initial draw sequence setup
renderCart();
