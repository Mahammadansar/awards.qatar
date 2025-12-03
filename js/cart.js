// Cart Management

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Load cart page
    if (document.getElementById('cartItems')) {
        loadCart();
    }
    
    // Load checkout page
    if (document.getElementById('orderItems')) {
        loadCheckout();
        setupCheckoutForm();
    }
});

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart
function addToCartStorage(productId, quantity = 1) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            imageUrl: product.imageUrl || '',
            quantity: quantity
        });
    }
    
    saveCart(cart);
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    const cart = getCart();
    const filteredCart = cart.filter(item => item.id !== productId);
    saveCart(filteredCart);
    updateCartCount();
    
    // Reload cart if on cart page
    if (document.getElementById('cartItems')) {
        loadCart();
    }
    
    // Reload checkout if on checkout page
    if (document.getElementById('orderItems')) {
        loadCheckout();
    }
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = newQuantity;
        saveCart(cart);
        updateCartCount();
        
        // Reload cart if on cart page
        if (document.getElementById('cartItems')) {
            loadCart();
        }
        
        // Reload checkout if on checkout page
        if (document.getElementById('orderItems')) {
            loadCheckout();
        }
    }
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = totalItems;
    });
}

// Load cart page
function loadCart() {
    const cart = getCart();
    const container = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        container.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    container.style.display = 'block';
    emptyCart.style.display = 'none';
    
    container.innerHTML = cart.map(item => {
        const imageUrl = item.imageUrl || '';
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                ${imageUrl ? `<img src="${imageUrl}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div style="display:none;">${item.image}</div>` : item.image}
            </div>
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-price">${item.price} QAR</div>
                <div class="cart-item-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                               onchange="updateQuantity(${item.id}, parseInt(this.value))">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');
    
    // Update summary
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + ' QAR';
    document.getElementById('total').textContent = total.toFixed(2) + ' QAR';
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cart.length > 0) {
            window.location.href = 'checkout.html';
        }
    });
}

// Load checkout page
function loadCheckout() {
    const cart = getCart();
    const container = document.getElementById('orderItems');
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="order-item">
            <span class="order-item-name">${item.name} x${item.quantity}</span>
            <span class="order-item-price">${(item.price * item.quantity).toFixed(2)} QAR</span>
        </div>
    `).join('');
    
    // Update checkout summary
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const total = subtotal + shipping;
    
    document.getElementById('checkoutSubtotal').textContent = subtotal.toFixed(2) + ' QAR';
    document.getElementById('checkoutTotal').textContent = total.toFixed(2) + ' QAR';
}

// Setup checkout form
function setupCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('cardDetails');
    
    // Show/hide card details based on payment method
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const cart = getCart();
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Get form data
        const formData = new FormData(form);
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        // Simulate order processing
        const orderData = {
            items: cart,
            paymentMethod: paymentMethod,
            timestamp: new Date().toISOString()
        };
        
        // Clear cart
        saveCart([]);
        updateCartCount();
        
        // Show success message
        alert('Order placed successfully! Thank you for your purchase.');
        
        // Redirect to home
        window.location.href = 'index.html';
    });
    
    // Format card number input
    const cardNumberInput = cardDetails.querySelector('input[placeholder*="Card Number"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Format expiry date input
    const expiryInput = cardDetails.querySelector('input[placeholder*="MM/YY"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

