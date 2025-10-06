import './styles.scss';
import { Task } from '../../components/ui/Task/Task';
import plus from '../../assets/icons/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { updateUserTasks } from '../../store/slices/usersSlice';
import { saveUsersTasks } from '../../features/LS';

const TaskPage = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const users = useSelector((state: RootState) => state.users.users);
	const currentUser = useSelector((state: RootState) => state.auth.currentUser);

	const location = useLocation();
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (currentUser) dispatch(updateUserTasks({ currentUser: currentUser, tasks: tasks }));
		saveUsersTasks(users);
	}, [tasks, users]);

	const onCreate = () => {
		navigate('/tasks/create', { state: { background: location } });
	};

	return (
		<div className="TaskPage">
			<h1>Tasks</h1>

			<button onClick={onCreate} className="createBtn">
				<h2>Create new task</h2>
				<div className="plusWrapper">
					<img src={plus} alt="plus" />
				</div>
			</button>

			{tasks.length > 0 ? (
				<div className="tasksWrapper">
					{tasks.map((task) => {
						return <Task key={task.id}>{task}</Task>;
					})}
				</div>
			) : (
				<div className="emptyTasks">Your tasks are empty</div>
			)}
		</div>
	);
};

export default TaskPage;
