import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import './styles.scss';

import * as CC from '../../components/common/index';
import { useSelector } from 'react-redux';

const HomePage = () => {
	const navigate = useNavigate();

	const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
	const loggedUser = useSelector((state: RootState) => state.auth.currentUser?.username);

	return (
		<div className="HomePage">
			<h1 className="main-title">{isLoggedIn ? `Hi, ${loggedUser}` : 'Welcome to My Tasks'}</h1>
			{isLoggedIn ? 'Glad to see you back!' : 'Please sign in or register to start managing your tasks easily'}
			<CC.Button type="button" onClick={() => navigate('/tasks')}>
				Tasks
			</CC.Button>
		</div>
	);
};

export default HomePage;
