import useRole from '../hooks/useRole'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminRoute({ children }) {
    const [role, roleLoading] = useRole()
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading || roleLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && role === 'admin') {
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace></Navigate>
}
