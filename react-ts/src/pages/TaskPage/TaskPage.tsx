import './styles.scss';
import * as CC from '../../components/common/index';
import plus from '../../assets/icons/plus.svg';

const TaskPage = () => {
	return (
		<div className="TaskPage">
			<h1>Tasks</h1>
			<button className="createBtn">
				<h2>Create new task</h2>
				<div className="plusWrapper">
					<img src={plus} alt="plus" />
				</div>
			</button>
			<div className="tasksWrapper">
				<CC.Task>
					1 tasktasktasktask task tasktas ktasktask tasktask 1 tasktasktasktask task tasktasktasktasktasktask 1 tasktasktasktask task tasktasktasktasktasktask
				</CC.Task>
				<CC.Task>2 task</CC.Task>
				<CC.Task>3 task</CC.Task>
				<CC.Task>4 task</CC.Task>
			</div>
		</div>
	);
};

export default TaskPage;
