import { LeftSide } from '../components/ui/LeftSide/LeftSide';
import { RightSide } from '../components/ui/RightSide/RightSide';

export const Layout = () => {
	return (
		<div className="container">
			<LeftSide />
			<RightSide />
		</div>
	);
};
