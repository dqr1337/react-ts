import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../../store/store';
import './styles.scss';

import homeIcon from '../../../assets/icons/homepage_icon.svg';
import taskIcon from '../../../assets/icons/tasks_icon.svg';
import profileIcon from '../../../assets/icons/profile_icon.svg';
import * as CC from '../../common/index';
import { logout } from '../../../store/slices/authSlice';

export const LeftSide = () => {
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
	const loggedUser = useSelector((state: RootState) => state.auth.currentUser?.username);

	return (
		<div className="leftSide">
			<h1 className="title">My Tasks</h1>
			<div className="wrapper">
				<nav className="navBar">
					<CC.NavigationLink to="/" icon={<img src={homeIcon} alt="tasks" />}>
						Home
					</CC.NavigationLink>
					<CC.NavigationLink to="/tasks" icon={<img src={taskIcon} alt="tasks" />}>
						Tasks
					</CC.NavigationLink>
				</nav>

				<div className="profileWrapper">
					{isLoggedIn && (
						<div className="usernameWrapper">
							<img src={profileIcon} alt="profile" />
							{loggedUser}
						</div>
					)}
					<CC.Button type="button" onClick={isLoggedIn ? () => dispatch(logout()) : () => navigate('/login')}>
						{isLoggedIn ? 'Logout' : 'Login'}
					</CC.Button>
				</div>
			</div>
		</div>
	);
};
