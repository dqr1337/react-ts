import { Outlet } from 'react-router-dom';
import './styles.scss';

export const RightSide = () => {
	return (
		<div className="rightSide">
			<Outlet />
		</div>
	);
};
