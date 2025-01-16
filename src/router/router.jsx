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
        element: <Dashboard />,
        children: [
            // user dashboard
            {
                path: "user",
                element: <MyProfile />
            },
            {
                path: "announcement",
                element: <Announcement />
            },

        ]
    },
]);

export default router;