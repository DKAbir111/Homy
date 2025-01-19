# **Building Management System (BMS)** - **Homy**

## **Live Demo**
- **Frontend Live Site Link**: [https://building-management-f924c.web.app]
- **Admin Username**: abir@gmail.com
- **Admin Password**: Abir@1

---

## **Project Overview**

Homy is a comprehensive and fully-featured Building Management System (BMS) designed for the efficient management of apartments and tenants. The system is designed with both users and admins in mind, allowing tenants to explore available apartments, apply for leases, and make payments, while admins can manage tenants, apartments, coupons, and announcements. 

This project utilizes modern technologies and follows industry best practices to create a secure, user-friendly, and scalable application.

---

## **Key Features**

- **User Authentication**: Secure login and registration using Firebase Authentication. Includes email/password and Google login.
- **Apartment Listings**: View available apartments with key details such as rent, floor, and block.
- **Agreement System**: Users can apply for apartments, and admins can manage agreement requests.
- **Payment System**: Secure online payments integrated with Stripe. Apply coupons for discounts on rent.
- **Admin Dashboard**: Admins can manage users, apartments, make announcements, and handle agreements.
- **Member Dashboard**: Members can view their profile, make payments, and track payment history.
- **Responsive Design**: Fully responsive UI, ensuring a seamless experience across mobile, tablet, and desktop.
- **Coupon System**: Manage and apply coupons to reduce rent for tenants.
- **Announcements**: Admins can make announcements visible to all users and members.
- **Pagination and Search**: Apartments page includes pagination and a rent range search.
- **JWT Authentication**: JSON Web Tokens (JWT) for secure authentication, with token storage in local storage.
- **Error Handling**: Sweet Alerts for notifications on successful actions and error handling.
- **Environment Variables**: Firebase and MongoDB credentials are securely stored in environment variables.

---
### **User Features**:
1. **Coupon Management**:
   - Filter coupons by category (electronics, fashion, etc.), brand, discount percentage, and expiration date.
   - Toggle to show only available coupons.
   - Show recently added coupons.

2. **Enhanced Authentication**:
   - Two-factor authentication (2FA) for secure login.
   - Social logins (Google, Facebook, etc.).
   - Reset email for account recovery.

3. **Notifications**:
   - Real-time notifications for:
     - New coupons matching user preferences.
     - Coupons nearing expiration.
     - Personalized discount alerts based on browsing history.

4. **Wishlist**:
   - Save favorite coupons for later use.
   - Notify users when coupons in their wishlist are about to expire or have been updated.

5. **User Dashboard**:
   - Track redeemed coupons.
   - See personal savings stats over time.
   - Set preferences for desired discounts or categories.

6. **Feedback and Ratings**:
   - Users can rate and review the usefulness of coupons.
   - Allow other users to sort coupons by "most helpful."

---

### **Admin Features**:
1. **Revenue Tracking**:
   - Detailed revenue reports.
   - Filter by category, time period, and user demographics.
   - Track earnings from partnerships or affiliate links.

2. **User Management**:
   - View and manage user accounts (e.g., deactivate, reactivate, etc.).
   - Track users who frequently violate policies.

3. **Coupon Analytics**:
   - Track popularity (views, clicks, redemptions).
   - Identify unused or underperforming coupons.

4. **Advanced Coupon Management**:
   - Batch creation/editing of coupons.
   - Auto-disable expired coupons.
   - Approve or reject submitted coupons by vendors.

5. **Filtering and Searching**:
   - Advanced admin filters to view coupons based on availability, expiration, and user activity.

6. **Security Enhancements**:
   - Secure admin dashboard with role-based access control.
   - API token management and IP whitelisting.

---

### **API Enhancements**:
1. **Secure API**:
   - Implement rate-limiting and user-based API keys.
   - Use JWT for access control, including refresh tokens for longevity.

2. **Server-Side Filtering**:
   - Allow backend filtering for:
     - Available/unavailable coupons.
     - Coupons with specific discount ranges.
     - Search by keywords in coupon titles or descriptions.

3. **Error Reporting and Monitoring**:
   - Real-time error tracking in APIs.
   - Logs for failed API calls to improve debugging.

## **Technologies Used**

### **Frontend**

- **React**: JavaScript library for building the user interface.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: Promise-based HTTP client for data fetching and making API calls.
- **React Router**: Declarative routing for single-page applications.
- **TanStack Query**: Efficient data fetching for GET requests.
- **SweetAlert2**: Beautiful, customizable, and accessible alerts for success and error messages.
- **Framer Motion**: Animations and transitions for a smooth, interactive experience.
- **Leaflet**: Interactive maps for displaying the building's location.
- **Stripe**: Payment gateway integration for handling payments.

### **Backend**

- **Node.js**: JavaScript runtime environment for building the backend server.
- **Express.js**: Web framework for building APIs in Node.js.
- **MongoDB**: NoSQL database for storing apartment and user data.
- **Mongoose**: ODM (Object Document Mapping) tool for MongoDB in Node.js.
- **JWT (JSON Web Token)**: Secure user authentication using JWT tokens.
- **Firebase**: Authentication service for email/password and Google sign-in.
- **Stripe**: Payment processing service for handling rent payments.

---

## **Important Instructions**

- **Admin Login**: Use the admin credentials provided above to access the admin dashboard.
- **Firebase Authentication**: Firebase configuration must be set up for authentication. Ensure environment variables are set correctly for both the frontend and backend.
- **Stripe Integration**: Ensure your Stripe keys are set up for the frontend to handle payments. Test the payment flow using the Stripe test mode.
- **Pagination**: Apartments listing is paginated to show 6 apartments per page. You can modify this by adjusting the backend response.
- **Search**: The apartments page includes a search bar that allows users to filter apartments based on rent range.

---

## **Contributions**

We welcome contributions to this project! Please follow the steps below:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch (`git checkout -b feature-xyz`).
4. Commit your changes (`git commit -am 'Add feature XYZ'`).
5. Push to the branch (`git push origin feature-xyz`).
6. Create a new Pull Request.