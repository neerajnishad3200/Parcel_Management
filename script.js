// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Login Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            const errorMessage = document.getElementById('error-message');
            
            // Validate username
            if (username.length < 5 || username.length > 20) {
                showError(errorMessage, 'Username must be between 5 and 20 characters');
                return;
            }
            
            // Validate password (at least one uppercase, one lowercase, and one special character)
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
            if (!passwordRegex.test(password)) {
                showError(errorMessage, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character');
                return;
            }
            
            // Redirect based on role
            if (role === 'customer') {
                window.location.href = 'customer-dashboard.html';
            } else if (role === 'officer') {
                window.location.href = 'officer-dashboard.html';
            } else {
                showError(errorMessage, 'Please select a role');
            }
        });
    }
    
    // Registration Form Validation
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const customerName = document.getElementById('customerName').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;
            const address = document.getElementById('address').value;
            const userId = document.getElementById('userId').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorMessage = document.getElementById('error-message');
            
            // Validate customer name
            if (customerName.length > 50) {
                showError(errorMessage, 'Customer name must be maximum 50 characters');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError(errorMessage, 'Please enter a valid email address');
                return;
            }
            
            // Validate mobile number
            const mobileRegex = /^\d{10}$/;
            if (!mobileRegex.test(mobile)) {
                showError(errorMessage, 'Mobile number must be 10 digits');
                return;
            }
            
            // Validate user ID
            if (userId.length < 5 || userId.length > 20) {
                showError(errorMessage, 'User ID must be between 5 and 20 characters');
                return;
            }
            
            // Validate password
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
            if (!passwordRegex.test(password)) {
                showError(errorMessage, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character');
                return;
            }
            
            // Validate confirm password
            if (password !== confirmPassword) {
                showError(errorMessage, 'Passwords do not match');
                return;
            }
            
            // Show success message and redirect
            const successMessage = document.getElementById('success-message');
            errorMessage.classList.add('d-none');
            successMessage.classList.remove('d-none');
            successMessage.textContent = 'Consumer Registration successful.';
            
            // Generate random user ID
            const randomUserId = 'USER' + Math.floor(Math.random() * 1000000);
            
            // Display acknowledgment
            const acknowledgmentDiv = document.getElementById('registration-acknowledgment');
            const registrationFormDiv = document.getElementById('registration-form-div');
            
            if (acknowledgmentDiv && registrationFormDiv) {
                registrationFormDiv.classList.add('d-none');
                acknowledgmentDiv.classList.remove('d-none');
                document.getElementById('ack-username').textContent = randomUserId;
                document.getElementById('ack-name').textContent = customerName;
                document.getElementById('ack-email').textContent = email;
            }
        });
    }
    
    // Booking Form Calculation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        const parcelSize = document.getElementById('parcelSize');
        const parcelWeight = document.getElementById('parcelWeight');
        const deliverySpeed = document.getElementById('deliverySpeed');
        const packagingPreference = document.getElementById('packagingPreference');
        const serviceCost = document.getElementById('serviceCost');
        
        // Calculate service cost when inputs change
        const calculateCost = function() {
            let cost = 0;
            
            // Base cost by size
            if (parcelSize.value === 'small') {
                cost += 100;
            } else if (parcelSize.value === 'medium') {
                cost += 200;
            } else if (parcelSize.value === 'large') {
                cost += 300;
            }
            
            // Additional cost by weight
            cost += parseInt(parcelWeight.value) * 2;
            
            // Additional cost by delivery speed
            if (deliverySpeed.value === 'express') {
                cost += 150;
            } else if (deliverySpeed.value === 'priority') {
                cost += 100;
            }
            
            // Additional cost by packaging preference
            if (packagingPreference.value === 'custom') {
                cost += 50;
            } else if (packagingPreference.value === 'eco') {
                cost += 30;
            } else if (packagingPreference.value === 'fragile') {
                cost += 80;
            }
            
            serviceCost.value = cost.toFixed(2);
        };
        
        // Add event listeners to form elements
        if (parcelSize && parcelWeight && deliverySpeed && packagingPreference) {
            parcelSize.addEventListener('change', calculateCost);
            parcelWeight.addEventListener('input', calculateCost);
            deliverySpeed.addEventListener('change', calculateCost);
            packagingPreference.addEventListener('change', calculateCost);
        }
    }
});

// Helper Functions
function showError(element, message) {
    element.textContent = message;
    element.classList.remove('d-none');
}

// Generate random booking ID
function generateBookingId() {
    return 'BK' + Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
}

// Logout function
function logout() {
    window.location.href = 'index.html';
}

// Payment processing
function processPayment() {
    const cardNo = document.getElementById('cardNo').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const errorMessage = document.getElementById('error-message');
    
    // Validate card number
    const cardNoRegex = /^\d{16}$/;
    if (!cardNoRegex.test(cardNo)) {
        showError(errorMessage, 'Card number must be 16 digits');
        return false;
    }
    
    // Validate expiry date
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
        showError(errorMessage, 'Expiry date must be in MM/YY format');
        return false;
    }
    
    // Validate CVV
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
        showError(errorMessage, 'CVV must be 3 digits');
        return false;
    }
    
    // Generate booking ID and redirect to invoice
    const bookingId = generateBookingId();
    localStorage.setItem('currentBookingId', bookingId);
    window.location.href = 'invoice.html';
    return true;
}
