<div align="center">

<img src="https://i.ibb.co.com/Z1wGBJDr/user.png" alt="Homy BMS Banner" width="100%" style="border-radius: 12px;" />

# 🏢 Homy — Building Management System

**A full-stack, production-ready apartment & tenant management platform**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Homy_BMS-4F46E5?style=for-the-badge)](https://building-management-f924c.web.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

</div>

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center"><b>🏠 Landing Page</b></td>
    <td align="center"><b>👤 Member Dashboard</b></td>
    <td align="center"><b>🛡️ Admin Dashboard</b></td>
  </tr>
  <tr>
    <td><img src="https://i.ibb.co.com/QFZWtrBw/landing.png" alt="Landing" width="280"/></td>
    <td><img src="https://i.ibb.co.com/Z1wGBJDr/user.png" alt="User Dashboard" width="280"/></td>
    <td><img src="https://i.ibb.co.com/SDvQZdb8/admin.png" alt="Admin Dashboard" width="280"/></td>
  </tr>
</table>

---

## 🔍 Overview

**Homy** is a comprehensive Building Management System that bridges the gap between tenants and property administrators. It provides a seamless experience for browsing apartments, submitting lease agreements, making rent payments with coupon discounts, and managing the entire tenant lifecycle — all in one platform.

> Built with a focus on security, scalability, and developer experience using a modern full-stack architecture.

---

## ✨ Key Features

### 🔐 Authentication & Security
- Firebase Authentication with **Email/Password** and **Google Sign-In**
- **JWT-based** API authorization with token storage
- Role-based access control (Guest / Member / Admin)
- Environment-variable-protected credentials

### 🏠 Apartment Listings
- Paginated apartment listings (6 per page)
- **Rent-range search** and filtering
- Detailed views with floor, block, and availability info
- Interactive location map powered by **Leaflet**

### 📋 Agreement & Lease System
- Tenants can apply for apartments in one click
- Admins review, approve, or reject applications
- Prevents duplicate agreements per tenant

### 💳 Payments & Coupons
- **Stripe-integrated** rent payment flow (test mode supported)
- Coupon system for percentage-based rent discounts
- Full payment history tracking for members

### 👨‍💼 Admin Dashboard
- Manage all users (promote to member, remove access)
- Apartment and agreement management
- Publish announcements to all members
- Coupon creation and lifecycle management

### 📢 Announcements
- Admins broadcast notices to all members
- Members see announcements on their personalized dashboard

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React** | Component-based UI |
| **TailwindCSS** | Utility-first styling |
| **React Router** | Client-side routing |
| **TanStack Query** | Server state & data fetching |
| **Axios** | HTTP client |
| **Stripe.js** | Payment UI integration |
| **Framer Motion** | Animations & transitions |
| **Leaflet** | Interactive maps |
| **SweetAlert2** | Notification alerts |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **Firebase Admin** | Authentication verification |
| **JWT** | Stateless authorization |
| **Stripe** | Payment processing |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Firebase project
- Stripe account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/homy-bms.git
cd homy-bms
```

### 2. Setup Environment Variables

**Frontend** — create `.env` in `/client`:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxx
VITE_API_BASE_URL=http://localhost:5000
```

**Backend** — create `.env` in `/server`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homy
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_xxxxxxxx
FIREBASE_ADMIN_SDK=path/to/serviceAccountKey.json
```

### 3. Install Dependencies

```bash
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

### 4. Run the App

```bash
# Start backend
cd server && npm start

# Start frontend (new terminal)
cd client && npm run dev
```

Frontend will be live at `http://localhost:5173`

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | abir@gmail.com | Abir@1 |
| **Member** | (register any account, admin promotes) | — |

> 💳 **Stripe Test Card**: `4242 4242 4242 4242` — any future date, any CVC

---

## 📁 Project Structure

```
homy-bms/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Shared UI components
│   │   ├── pages/           # Route-level pages
│   │   │   ├── Admin/       # Admin dashboard pages
│   │   │   ├── Member/      # Member dashboard pages
│   │   │   └── Public/      # Landing, Apartments, etc.
│   │   ├── hooks/           # Custom React hooks
│   │   ├── providers/       # Context providers (Auth, etc.)
│   │   └── utils/           # Axios instance, helpers
│   └── public/
│
└── server/                  # Express backend
    ├── routes/              # API route handlers
    ├── middleware/          # JWT verification, role guards
    ├── models/              # Mongoose schemas
    └── index.js             # Entry point
```

---

## 🗺️ API Endpoints (Sample)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/apartments` | Public | List all apartments (paginated) |
| `POST` | `/agreements` | Member | Submit lease agreement |
| `GET` | `/agreements` | Admin | View all agreements |
| `PATCH` | `/agreements/:id` | Admin | Accept / reject agreement |
| `POST` | `/payments` | Member | Process rent payment |
| `GET` | `/payments/history` | Member | Member payment history |
| `GET` | `/users` | Admin | All users |
| `PATCH` | `/users/:id/role` | Admin | Update user role |
| `POST` | `/coupons` | Admin | Create discount coupon |
| `POST` | `/announcements` | Admin | Post announcement |

---

## 🔮 Roadmap

- [ ] Two-factor authentication (2FA)
- [ ] Real-time notifications (WebSocket / Firebase)
- [ ] Coupon wishlist & expiry alerts
- [ ] Revenue analytics dashboard for admins
- [ ] Batch coupon creation & auto-expiry
- [ ] Maintenance request ticketing system
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Abir**

⭐ If you found this project useful, consider giving it a star!

[![GitHub stars](https://img.shields.io/github/stars/your-username/homy-bms?style=social)](https://github.com/your-username/homy-bms)

</div>
