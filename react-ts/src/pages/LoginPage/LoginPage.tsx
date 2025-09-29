import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import * as CC from '../../components/common/index';

export const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function SubmitForm(e) {
		e.preventDefault();
	}

	return (
		<div className="container">
			<div className="loginWrapper">
				<h1 className="title">My Tasks</h1>
				<h2>Login</h2>

				<CC.Form onSubmit={SubmitForm} setUsername={setUsername} username={username} setPassword={setPassword} password={password} buttonLabel="Log In" />

				<p className="link-wrapper">
					Don’t have an account?
					<Link className="link" to="/register">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};
