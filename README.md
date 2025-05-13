# Parcel Management System

A comprehensive web-based parcel management system with customer and officer roles, built using HTML, CSS, JavaScript, and Bootstrap.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [User Roles](#user-roles)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Overview

The Parcel Management System is a web application designed to manage parcel bookings, tracking, and delivery. It provides different interfaces for customers and officers, allowing customers to book services, track parcels, and view their booking history, while officers can manage deliveries, update statuses, and schedule pickups.

## Features

### Authentication
- Login for customers and officers
- Registration for new customers

### Customer Features
- Dashboard with quick access to all features
- Booking service for creating new parcel bookings
- Payment processing
- Invoice generation
- Parcel tracking
- Booking history
- Customer support

### Officer Features
- Dashboard with quick access to all features
- Booking service for customers
- Parcel tracking
- Delivery status updates
- Pickup scheduling
- Booking history with search functionality

## File Structure

```
parcel-management-system/
│
├── index.html                  # Login page
├── register.html               # Registration page
├── styles.css                  # Main CSS file
├── script.js                   # Main JavaScript file
│
├── Customer Pages
│   ├── customer-dashboard.html # Customer dashboard
│   ├── booking-service.html    # Booking service form
│   ├── payment.html            # Payment page
│   ├── invoice.html            # Invoice page
│   ├── tracking.html           # Tracking page
│   ├── booking-history.html    # Booking history
│   └── customer-support.html   # Customer support page
│
└── Officer Pages
    ├── officer-dashboard.html       # Officer dashboard
    ├── officer-booking.html         # Booking service for officers
    ├── officer-tracking.html        # Tracking page for officers
    ├── delivery-status.html         # Delivery status update page
    ├── pickup-scheduling.html       # Pickup scheduling page
    └── officer-booking-history.html # Booking history for officers
```

## How It Works

### Authentication Flow

1. **Login**: Users can log in through `index.html` by selecting their role (customer or officer).
2. **Registration**: New customers can register through `register.html`.
3. **Role-Based Redirection**: After login, customers are redirected to `customer-dashboard.html` and officers to `officer-dashboard.html`.

### Customer Flow

1. **Dashboard**: The customer dashboard (`customer-dashboard.html`) provides access to all customer features.
2. **Booking Service**: Customers can book a new service through `booking-service.html`.
3. **Payment**: After booking, customers proceed to `payment.html` to complete the payment.
4. **Invoice**: Upon successful payment, an invoice is generated in `invoice.html`.
5. **Tracking**: Customers can track their parcels using `tracking.html`.
6. **Booking History**: Previous bookings can be viewed in `booking-history.html`.
7. **Customer Support**: Contact information and FAQs are available in `customer-support.html`.

### Officer Flow

1. **Dashboard**: The officer dashboard (`officer-dashboard.html`) provides access to all officer features.
2. **Booking Service**: Officers can book services for customers through `officer-booking.html`.
3. **Tracking**: Officers can track parcels using `officer-tracking.html`.
4. **Delivery Status**: Officers can update delivery status through `delivery-status.html`.
5. **Pickup Scheduling**: Officers can schedule pickups through `pickup-scheduling.html`.
6. **Booking History**: Officers can view and search booking history in `officer-booking-history.html`.

### Code Structure

#### HTML Structure

Each HTML file follows a consistent structure:
- **Navbar**: Navigation bar with links to different pages
- **Main Content**: Page-specific content
- **Footer**: Copyright information

#### CSS Structure

The `styles.css` file contains:
- **Global Styles**: Basic styling for the entire application
- **Component Styles**: Specific styling for components like cards, forms, etc.
- **Responsive Styles**: Media queries for different screen sizes

#### JavaScript Structure

The `script.js` file contains:
- **Event Listeners**: For form submissions and button clicks
- **Validation Functions**: For form validation
- **Helper Functions**: For generating IDs, calculating costs, etc.
- **Page-Specific Functions**: Functions specific to certain pages

## User Roles

### Customer

Customers can:
- Register and login
- Book parcel delivery services
- Make payments
- Track parcels
- View booking history
- Contact customer support

### Officer

Officers can:
- Login (no registration)
- Book services for customers
- Track parcels
- Update delivery status
- Schedule pickups
- View and search booking history

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/parcel-management-system.git
   ```

2. Open the project folder:
   ```
   cd parcel-management-system
   ```

3. Open `index.html` in your web browser.

## Usage

### Customer

1. Open `index.html`
2. Login as a customer or register a new account
3. Use the navigation bar to access different features
4. Book a service, track parcels, view history, etc.

### Officer

1. Open `index.html`
2. Login as an officer
3. Use the navigation bar to access different features
4. Manage deliveries, update statuses, schedule pickups, etc.

## Technologies Used

- **HTML5**: For structure and content
- **CSS3**: For styling and animations
- **JavaScript**: For client-side validation and interactivity
- **Bootstrap 5**: For responsive design and UI components
- **Font Awesome**: For icons

---

This project is a front-end implementation only. In a real-world scenario, it would be connected to a back-end server for data persistence and authentication.
