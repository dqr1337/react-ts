import './styles.scss';

import homeIcon from '../../../assets/icons/homepage_icon.svg';
import taskIcon from '../../../assets/icons/tasks_icon.svg';
import * as CC from '../../common/index';

export const LeftSide = () => {
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
		</div>
	);
};
