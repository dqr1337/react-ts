import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
	const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated);

	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	}
	return <Outlet />;
};
