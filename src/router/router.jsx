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
                path: 'manage-member',
                element: <PrivateRoute><ManageMember /> </PrivateRoute>

            },
            {
                path: "make-announcement",
                element: <PrivateRoute><MakeAnnouncement /> </PrivateRoute>
            },
            {
                path: "manage-coupon",
                element: <PrivateRoute><ManageCoupon /> </PrivateRoute>
            },
            {
                path: "agreement-request",
                element: <PrivateRoute> <AgreementRequest /> </PrivateRoute>
            }


        ]
    },
]);

export default router;