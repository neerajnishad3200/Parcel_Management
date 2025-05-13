# Parcel Management System - Technical Documentation

This document provides a detailed technical overview of the Parcel Management System implementation, explaining the code structure, key functions, and implementation details.

## Code Architecture

The Parcel Management System follows a simple front-end architecture with the following components:

1. **HTML**: Provides the structure and content of each page
2. **CSS**: Handles styling and responsive design
3. **JavaScript**: Manages interactivity, validation, and dynamic content

## HTML Implementation

### Common Structure

All HTML files follow a consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, and CSS links -->
</head>
<body>
    <div class="container-fluid p-0">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <!-- Navigation links -->
        </nav>

        <!-- Main Content -->
        <div class="container my-5">
            <!-- Page-specific content -->
        </div>

        <!-- Footer -->
        <footer class="bg-dark text-white text-center py-3 mt-5">
            <!-- Footer content -->
        </footer>
    </div>

    <!-- JavaScript links -->
</body>
</html>
```

### Key HTML Components

1. **Forms**: Used for data input in registration, login, booking, etc.
2. **Cards**: Used to display information in a structured way
3. **Tables**: Used for displaying tabular data like booking history
4. **Modals**: Used for displaying additional information or confirmation dialogs
5. **Alerts**: Used for displaying success or error messages

## CSS Implementation

The `styles.css` file is organized into sections:

### Global Styles

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container-fluid {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

footer {
    margin-top: auto;
}
```

### Component Styles

```css
/* Card Styles */
.card {
    border-radius: 10px;
    overflow: hidden;
}

/* Form Styles */
.form-control:focus, .form-select:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Dashboard Styles */
.dashboard-card {
    transition: transform 0.3s ease;
    cursor: pointer;
}

.dashboard-card:hover {
    transform: translateY(-5px);
}
```

### Responsive Styles

```css
@media (max-width: 768px) {
    .card {
        margin-bottom: 1.5rem;
    }
}
```

## JavaScript Implementation

The `script.js` file contains several key functions:

### Form Validation

```javascript
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
        
        // Validate password
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
        }
    });
}
```

### Helper Functions

```javascript
// Show error message
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
```

### Dynamic Calculations

```javascript
// Calculate service cost
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
```

## Key Implementation Details

### Authentication

The authentication is simulated in the front-end without actual server-side validation:

```javascript
// Redirect based on role
if (role === 'customer') {
    window.location.href = 'customer-dashboard.html';
} else if (role === 'officer') {
    window.location.href = 'officer-dashboard.html';
}
```

### Form Handling

Forms are handled using JavaScript event listeners:

```javascript
const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation and processing
        // ...
        
        // Show success message
        successMessage.classList.remove('d-none');
        successMessage.textContent = 'Consumer Registration successful.';
    });
}
```

### Tracking System

The tracking system uses a visual timeline to show the status of parcels:

```html
<div class="tracking-timeline mt-4">
    <div class="tracking-step active mb-4">
        <div class="step-icon">1</div>
        <div class="ms-4">
            <h6>Order Placed</h6>
            <p class="text-muted mb-0">15-06-2023 10:30 AM</p>
            <p>Your order has been placed successfully.</p>
        </div>
    </div>
    
    <!-- More steps... -->
</div>
```

### Payment Processing

Payment processing is simulated with form validation:

```javascript
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
    
    // More validation...
    
    // Generate booking ID and redirect to invoice
    const bookingId = generateBookingId();
    localStorage.setItem('currentBookingId', bookingId);
    window.location.href = 'invoice.html';
    return true;
}
```

## Bootstrap Components Used

1. **Navbar**: For navigation
2. **Cards**: For content containers
3. **Forms**: For data input
4. **Buttons**: For actions
5. **Alerts**: For messages
6. **Badges**: For status indicators
7. **Tables**: For tabular data
8. **Modals**: For dialogs
9. **Pagination**: For multi-page content
10. **Accordion**: For FAQs

## Responsive Design

The application is fully responsive using Bootstrap's grid system and responsive utilities:

```html
<div class="row">
    <div class="col-md-6">
        <!-- Content for medium and larger screens (half width) -->
        <!-- On small screens, this will be full width -->
    </div>
    <div class="col-md-6">
        <!-- Content for medium and larger screens (half width) -->
        <!-- On small screens, this will be full width -->
    </div>
</div>
```

## Future Enhancements

1. **Backend Integration**: Connect to a server for data persistence
2. **Authentication**: Implement real authentication with JWT or sessions
3. **Database**: Store user data, bookings, and tracking information
4. **API Integration**: Integrate with shipping APIs for real tracking
5. **Payment Gateway**: Integrate with payment gateways for real transactions

## Conclusion

This implementation provides a comprehensive front-end for a Parcel Management System. It demonstrates the use of HTML, CSS, JavaScript, and Bootstrap to create a responsive and interactive web application with different user roles and features.
