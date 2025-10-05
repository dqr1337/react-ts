import './styles.scss';
import { Task } from '../../components/ui/Task/Task';
import plus from '../../assets/icons/plus.svg';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';

const TaskPage = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const location = useLocation();
	const navigate = useNavigate();

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

			<div className="tasksWrapper">
				{tasks.map((task) => {
					return <Task key={task.id}>{task}</Task>;
				})}
			</div>
		</div>
	);
};

export default TaskPage;
