BMS-Project/
│
├── client/                # Client-side application
│   ├── public/            # Public folder for static files
│   │   ├── index.html     # Main HTML file
│   │   └── favicon.ico    # Favicon for the app
│   │
│   ├── src/               # Source files for React
│   │   ├── api/           # API request handlers
│   │   │   ├── apartments.js
│   │   │   ├── auth.js
│   │   │   ├── coupons.js
│   │   │   ├── members.js
│   │   │   └── announcements.js
│   │   │
│   │   ├── assets/        # Static assets like images, fonts
│   │   │   ├── images/
│   │   │   └── styles/
│   │   │
│   │   ├── components/    # Reusable components
│   │   │   ├── Banner.js
│   │   │   ├── Footer.js
│   │   │   ├── Navbar.js
│   │   │   ├── Pagination.js
│   │   │   ├── SearchBar.js
│   │   │   └── ToastNotification.js
│   │   │
│   │   ├── context/       # Context API for state management
│   │   │   ├── AuthContext.js
│   │   │   ├── ApartmentContext.js
│   │   │   └── CouponContext.js
│   │   │
│   │   ├── hooks/         # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── usePagination.js
│   │   │
│   │   ├── layouts/       # Layout components
│   │   │   ├── AdminLayout.js
│   │   │   ├── DashboardLayout.js
│   │   │   └── MainLayout.js
│   │   │
│   │   ├── pages/         # Page components for routing
│   │   │   ├── Home.js
│   │   │   ├── Apartments.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard/
│   │   │   │   ├── AdminProfile.js
│   │   │   │   ├── ManageMembers.js
│   │   │   │   ├── ManageCoupons.js
│   │   │   │   ├── AgreementRequests.js
│   │   │   │   ├── Announcements.js
│   │   │   │   ├── MyProfile.js
│   │   │   │   ├── MakePayment.js
│   │   │   │   └── PaymentHistory.js
│   │   │   └── NotFound.js
│   │   │
│   │   ├── routes/        # Routes for the application
│   │   │   ├── PrivateRoute.js
│   │   │   └── AppRouter.js
│   │   │
│   │   ├── styles/        # Global styles
│   │   │   ├── variables.css
│   │   │   ├── global.css
│   │   │   └── theme.css
│   │   │
│   │   ├── utils/         # Utility functions
│   │   │   ├── formatDate.js
│   │   │   ├── validateForm.js
│   │   │   └── jwtUtils.js
│   │   │
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # Entry point for React
│   │   └── setupTests.js  # Jest setup
│   │
│   ├── package.json       # Client dependencies
│   └── .env               # Environment variables
│
├── server/                # Server-side application
│   ├── config/            # Configuration files
│   │   ├── db.js
│   │   └── firebase.js
│   │
│   ├── controllers/       # Controllers for handling routes
│   │   ├── apartmentsController.js
│   │   ├── authController.js
│   │   ├── couponsController.js
│   │   ├── membersController.js
│   │   └── announcementsController.js
│   │
│   ├── middleware/        # Middleware for request processing
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validateInput.js
│   │
│   ├── models/            # MongoDB models
│   │   ├── Apartment.js
│   │   ├── Coupon.js
│   │   ├── User.js
│   │   └── Payment.js
│   │
│   ├── routes/            # Express routes
│   │   ├── apartmentRoutes.js
│   │   ├── authRoutes.js
│   │   ├── couponRoutes.js
│   │   ├── memberRoutes.js
│   │   └── announcementRoutes.js
│   │
│   ├── utils/             # Utility functions
│   │   ├── sendEmail.js
│   │   └── jwtUtils.js
│   │
│   ├── app.js             # Express application setup
│   ├── server.js          # Entry point for the server
│   ├── package.json       # Server dependencies
│   └── .env               # Environment variables
│
├── .gitignore             # Ignore specific files/folders in Git
├── README.md              # Documentation for the project
└── package.json           # Project-level dependencies
