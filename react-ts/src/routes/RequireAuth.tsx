import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import type { RootState } from '../store/store';

export const RequireAuth = () => {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
	const location = useLocation();

	if (!isLoggedIn) {
		return <Navigate to="/login" replace state={{ from: location }} />;
	}
	return <Outlet />;
};
