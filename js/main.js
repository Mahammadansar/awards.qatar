// Main JavaScript File

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupSearch();
    setupMobileMenu();
    updateCartCount();
    updateCopyrightYear();
    checkLoginStatus();
});

// Check login status and update UI
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        const userEmail = localStorage.getItem('userEmail');
        updateUserIcon(userEmail);
    }
}

// Update user icon in navigation
function updateUserIcon(email) {
    const userLinks = document.querySelectorAll('.nav-link[href="login.html"]');
    userLinks.forEach(link => {
        link.innerHTML = `<i class="fas fa-user-check"></i>`;
        link.title = `Logged in as ${email}`;
        link.href = '#';
    });
}

// Update copyright year automatically
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Setup navigation
function setupNavigation() {
    // Update active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput) return;
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            // Redirect to products page with search query
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    }
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    // Check for search parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
        // Filter products if on products page
        if (document.getElementById('productsGrid')) {
            filterProductsBySearch(searchQuery);
        }
    }
}

// Filter products by search query
function filterProductsBySearch(query) {
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    if (typeof loadAllProducts === 'function') {
        loadAllProducts(filtered);
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggle && navMenu) {
        toggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(10, 14, 39, 0.95)';
            navMenu.style.backdropFilter = 'blur(10px)';
            navMenu.style.padding = '1rem';
            navMenu.style.borderTop = '1px solid var(--border-color)';
        });
    }
}

// Update cart count (will be overridden by cart.js if loaded)
function updateCartCount() {
    const cart = localStorage.getItem('cart');
    const cartData = cart ? JSON.parse(cart) : [];
    const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = totalItems;
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards and category cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.product-card, .category-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});

