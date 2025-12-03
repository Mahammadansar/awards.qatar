// Login & Registration Demo Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    setupPasswordToggle();
    
    // Login form handling
    if (document.getElementById('loginForm')) {
        setupLoginForm();
    }
    
    // Registration form handling
    if (document.getElementById('registerForm')) {
        setupRegisterForm();
    }
});

// Setup password toggle
function setupPasswordToggle() {
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

// Setup login form
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Demo validation
        if (!email || !password) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Demo login - simulate API call
        showMessage('Logging in...', 'info');
        
        setTimeout(() => {
            // Store demo login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            if (remember) {
                localStorage.setItem('rememberMe', 'true');
            }
            
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect to homepage after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }, 1500);
    });
    
    // Social login buttons (demo)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'Facebook';
            showMessage(`${provider} login is a demo feature. Backend integration required.`, 'info');
        });
    });
}

// Setup registration form
function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        // Validation
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage('Passwords do not match', 'error');
            return;
        }
        
        if (!terms) {
            showMessage('Please accept the Terms & Conditions', 'error');
            return;
        }
        
        // Demo registration - simulate API call
        showMessage('Creating account...', 'info');
        
        setTimeout(() => {
            // Store demo user data
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userData', JSON.stringify(userData));
            
            showMessage('Account created successfully! Redirecting...', 'success');
            
            // Redirect to homepage after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }, 1500);
    });
    
    // Password match validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            const password = document.getElementById('password').value;
            if (this.value && password !== this.value) {
                this.setCustomValidity('Passwords do not match');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Social signup buttons (demo)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'Facebook';
            showMessage(`${provider} signup is a demo feature. Backend integration required.`, 'info');
        });
    });
}

// Show message notification
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.login-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `login-message login-message-${type}`;
    messageDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Insert message
    const form = document.querySelector('.login-form');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

// Check if user is logged in (for demo)
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

// Initialize login status check
checkLoginStatus();

