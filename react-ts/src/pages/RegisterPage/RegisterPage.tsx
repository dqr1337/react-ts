import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import * as CC from '../../components/common/index';

export const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function SubmitForm(e) {
		e.preventDefault();
	}

	return (
		<div className="container">
			<div className="registerWrapper">
				<h1 className="title">My Tasks</h1>
				<h2>Create an account</h2>

				<CC.Form
					onSubmit={SubmitForm}
					setUsername={setUsername}
					username={username}
					setPassword={setPassword}
					password={password}
					buttonLabel="Create an account"
				/>

				<p className="link-wrapper">
					Already have an account?
					<Link className="link" to="/login">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};
