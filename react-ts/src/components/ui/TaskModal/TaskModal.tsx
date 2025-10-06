import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './styles.scss';
import TaskPage from '../../../pages/TaskPage/TaskPage';
import * as CC from '../../common/index';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';
import { addTask, changeTask } from '../../../store/slices/tasksSlice';

export const TaskModal = () => {
	const { id } = useParams();
	const numId = Number(id);
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const currentTask = tasks.find((task) => task.id === numId);
	const [textValue, setTextValue] = useState<string>(currentTask?.text || '');

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const background = location.state?.background;

	const onSave = () => {
		if (numId && currentTask) {
			dispatch(changeTask({ id: numId, text: textValue, isCompleted: false }));

			navigate('/tasks', { replace: true });
			return;
		}

		if (textValue) {
			dispatch(addTask(textValue));
			navigate('/tasks', { replace: true });
		}
	};

	return (
		<>
			{background && <TaskPage />}

			{background && (
				<div
					className="module-overlay"
					onClick={() => {
						navigate('/tasks');
					}}
				>
					<div onClick={(e) => e.stopPropagation()} className="module-task">
						<textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} id={id} className="taskText"></textarea>
						<CC.Button onClick={onSave} type="button">
							{id ? 'save' : 'create'}
						</CC.Button>
					</div>
				</div>
			)}
		</>
	);
};
