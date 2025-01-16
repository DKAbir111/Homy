import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth()
    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <div>Loading...</div>
    }
    if (user?.email) {
        return children
    }
    return (

        <Navigate to={'/auth/login'} state={location.pathname}>

        </Navigate>

    )
}
