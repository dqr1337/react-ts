import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eyeClosed.svg';
import * as CC from '../../components/common/index';

import { login } from '../../store/slices/authSlice';
import { authVerify } from '../../features/authVerify';

export const LoginPage = () => {
	const [isVisibile, setIsVisibile] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const users = useSelector((state: any) => state.users.users);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const eyeImg = <img src={eye} alt="eye" />;
	const eyeClosedImg = <img src={eyeClosed} alt="eyeClosed" />;

	function SubmitForm(e: React.FormEvent) {
		e.preventDefault();

		const currentUser = { username: username, password: password };

		if (authVerify(users, currentUser)) {
			dispatch(login(currentUser));
			navigate('/', { replace: true });
		} else {
			navigate('/register');
		}
	}

	return (
		<div className="container">
			<div className="loginWrapper">
				<h1 className="title">My Tasks</h1>
				<h2>Login</h2>

				<CC.Form onSubmit={SubmitForm} buttonLabel="Log In">
					<CC.Input
						inputLabel={
							<>
								Username<span className="highlighted"> *</span>
							</>
						}
						inputValue={username}
						callBack={setUsername}
						inputType="text"
						inputName="login"
						required
					></CC.Input>

					<CC.Input
						inputLabel={
							<>
								Password<span className="highlighted"> *</span>
							</>
						}
						inputValue={password}
						callBack={setPassword}
						inputType={isVisibile ? 'text' : 'password'}
						inputName="password"
						required
					>
						<button
							type="button"
							className="visibilityBtn"
							onClick={() => {
								setIsVisibile(!isVisibile);
							}}
							hidden={password ? false : true}
						>
							{isVisibile ? eyeClosedImg : eyeImg}
						</button>
					</CC.Input>
				</CC.Form>

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
