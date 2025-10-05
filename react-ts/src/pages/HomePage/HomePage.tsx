import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import './styles.scss';

import * as CC from '../../components/common/index';
import { Task } from '../../components/ui/Task/Task';

const HomePage = () => {
	const navigate = useNavigate();

	const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
	const loggedUser = useSelector((state: RootState) => state.auth.currentUser?.username);
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	return (
		<>
			<div className="HomePage">
				<h1 className="main-title">{isLoggedIn ? `Hi, ${loggedUser}` : 'Welcome to My Tasks'}</h1>
				{isLoggedIn ? 'Glad to see you back!' : 'Please sign in or register to start managing your tasks easily'}
				<CC.Button type="button" onClick={() => navigate('/tasks')}>
					Tasks
				</CC.Button>
			</div>

			{isLoggedIn && (
				<div className="lastTasks">
					{tasks
						.filter((task) => !task.isCompleted)
						.slice(-3)
						.map((task) => {
							if (!task.isCompleted) {
								return <Task key={task.id}>{task}</Task>;
							}
						})}
				</div>
			)}
		</>
	);
};

export default HomePage;
