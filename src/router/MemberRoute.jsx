import useRole from '../hooks/useRole'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function MemberRoute({ children }) {
    const [role, roleLoading] = useRole()
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading || roleLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && role === 'member') {
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace></Navigate>
}
