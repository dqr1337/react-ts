import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

import homeIcon from '../../../assets/icons/homepage_icon.svg';
import taskIcon from '../../../assets/icons/tasks_icon.svg';
import profileIcon from '../../../assets/icons/profile_icon.svg';
import * as CC from '../../common/index';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../store/slices/authSlice';

export const LeftSide = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated);
	const loggedUser = useSelector((state: any) => state.auth.currentUser.username);

	return (
		<div className="leftSide">
			<h1 className="title">My Tasks</h1>

			<nav className="navBar">
				<CC.NavigationLink to="/" icon={<img src={homeIcon} alt="tasks" />}>
					Home
				</CC.NavigationLink>
				<CC.NavigationLink to="/tasks" icon={<img src={taskIcon} alt="tasks" />}>
					Tasks
				</CC.NavigationLink>
			</nav>

			{isLoggedIn ? (
				<div className="profileWrapper">
					<div className="usernameWrapper">
						<img src={profileIcon} alt="profile" />
						{loggedUser}
					</div>
					<CC.Button type="button" onClick={() => dispatch(logout())}>
						Logout
					</CC.Button>
				</div>
			) : (
				<div className="profileWrapper">
					<CC.Button type="button" onClick={() => navigate('/login')}>
						Login
					</CC.Button>
				</div>
			)}
		</div>
	);
};
