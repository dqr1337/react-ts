import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../store/store';
import './styles.scss';

import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eyeClosed.svg';
import * as CC from '../../components/common/index';

import { login } from '../../store/slices/authSlice';
import { authVerify } from '../../features/authVerify';
import { setUsersData } from '../../store/slices/usersSlice';
import { getUsersData, getUserTasks } from '../../features/LS';
import { setTasksForUser } from '../../store/slices/tasksSlice';

export const LoginPage = () => {
	const [isVisibile, setIsVisibile] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const users = useSelector((state: RootState) => state.users.users);
	const from = location.state?.from?.pathname || '/';

	useEffect(() => {
		const users = getUsersData();
		dispatch(setUsersData(users));
		dispatch(setTasksForUser([]));
	}, []);

	function SubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const currentUser = { username: username, password: password };

		if (authVerify(users, currentUser)) {
			dispatch(login(currentUser));
			const tasksList = getUserTasks(currentUser);

			dispatch(setTasksForUser(tasksList));
			navigate(from, { replace: true });
		} else {
			navigate('/register');
		}
	}

	const eyeImg = <img src={eye} alt="eye" />;
	const eyeClosedImg = <img src={eyeClosed} alt="eyeClosed" />;

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
