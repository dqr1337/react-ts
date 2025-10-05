import './styles.scss';
import crossImg from '../../../assets/icons/cross.svg';
import editImg from '../../../assets/icons/edit.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCompletion, deleteTask } from '../../../store/slices/tasksSlice';
import { useState } from 'react';
import type { AppDispatch } from '../../../store/store';

type TaskType = {
	children: {
		id: number;
		text: string;
		isCompleted: boolean;
	};
};

export const Task = ({ children, ...props }: TaskType) => {
	const [isCompleted, setIsCompleted] = useState<boolean>(children.isCompleted);

	const dispatch: AppDispatch = useDispatch();
	const location = useLocation();

	const onDelete = () => {
		dispatch(deleteTask(children.id));
	};

	const cross = <img src={crossImg} alt="cross" />;
	const edit = <img src={editImg} alt="cross" />;

	return (
		<>
			<label className="task" {...props}>
				<input
					checked={isCompleted}
					onChange={() => {
						setIsCompleted(!isCompleted);
						dispatch(changeCompletion(children.id));
					}}
					type="checkbox"
				/>
				<div className="custom-checkbox"></div>
				<div className="taskText">{children.text}</div>
				<div className="btnsWrapper">
					<button onClick={onDelete} className="taskBtn">
						{cross}
					</button>

					<Link to={`/tasks/${children.id}/edit`} state={{ background: location }} className="taskBtn">
						{edit}
					</Link>
				</div>
			</label>
		</>
	);
};
