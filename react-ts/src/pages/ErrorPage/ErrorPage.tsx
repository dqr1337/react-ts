import { useNavigate } from 'react-router-dom';
import './styles.scss';

import error from '../../assets/icons/error.svg';
import * as CC from '../../components/common/index';

export const ErrorPage = () => {
	const navigate = useNavigate();

	const onClosingError = () => {
		navigate('/', { replace: true });
	};

	return (
		<div className="container">
			<div className="errorPage">
				<div className="wrapper">
					<div className="title">Page not Found</div>
					<div className="errorWrapper">
						<img src={error} alt="error" />
						404 Error
					</div>
				</div>

				<CC.Button onClick={() => onClosingError()} type="button">
					Go back
				</CC.Button>
			</div>
		</div>
	);
};
