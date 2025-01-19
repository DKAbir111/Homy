import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Apartment from "../pages/Apartment/Apartment";
import Dashboard from "../layouts/Dashboard";
import MyProfile from "../pages/Dashboard/User/MyProfile";
import Announcement from "../pages/Dashboard/User/Announcement";
import PrivateRoute from "./PrivateRoute";
import ManageMember from "../pages/Dashboard/Admin/ManageMember";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import ManageCoupon from "../pages/Dashboard/Admin/ManageCoupon";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import StripePayment from "../pages/Dashboard/Member/StripePayment";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import MemberRoute from "./MemberRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomeLayout />
            },
            {
                path: "/apartment",
                element: <Apartment />
            },
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },

    // Dashboard
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // user dashboard
            {
                path: "user",
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },
            {
                path: "announcement",
                element: <PrivateRoute> <Announcement /></PrivateRoute>
            },

            // admin dashboard
            {
                path: 'admin',
                element: <AdminRoute><PrivateRoute><AdminHome /> </PrivateRoute></AdminRoute>

            },
            {
                path: 'manage-member',
                element: <AdminRoute><PrivateRoute><ManageMember /> </PrivateRoute></AdminRoute>

            },
            {
                path: "make-announcement",
                element: <AdminRoute><PrivateRoute><MakeAnnouncement /> </PrivateRoute></AdminRoute>
            },
            {
                path: "manage-coupon",
                element: <AdminRoute><PrivateRoute><ManageCoupon /> </PrivateRoute></AdminRoute>
            },
            {
                path: "agreement-request",
                element: <AdminRoute> <PrivateRoute> <AgreementRequest /> </PrivateRoute></AdminRoute>
            },
            // member dashboard
            {
                path: "make-payment",
                element: <MemberRoute><PrivateRoute> <MakePayment /> </PrivateRoute></MemberRoute>
            },
            {
                path: 'payment-history',
                element: <MemberRoute><PrivateRoute> <PaymentHistory /> </PrivateRoute></MemberRoute>
            },
            {
                path: 'stripe-pay',
                element: <MemberRoute> <PrivateRoute> <StripePayment /> </PrivateRoute></MemberRoute>
            }


        ]
    },
]);

export default router;