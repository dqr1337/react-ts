import './styles.scss';
import crossImg from '../../../assets/icons/cross.svg';
import editImg from '../../../assets/icons/edit.svg';

type TaskType = {
	children: string;
};

export const Task = ({ children, ...props }: TaskType) => {
	const cross = <img src={crossImg} alt="cross" />;
	const edit = <img src={editImg} alt="cross" />;

	return (
		<label className="task" {...props}>
			<input type="checkbox" />
			<div className="custom-checkbox"></div>
			<div className="text">{children}</div>
			<div className="btnsWrapper">
				<button className="taskBtn">{cross}</button>
				<button className="taskBtn editBtn">{edit}</button>
			</div>
		</label>
	);
};
