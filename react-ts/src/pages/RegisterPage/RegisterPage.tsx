import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../store/store';
import './styles.scss';

import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eyeClosed.svg';
import * as CC from '../../components/common/index';
import { authVerify } from '../../features/authVerify';
import { addUser, setUsersData } from '../../store/slices/usersSlice';
import { login } from '../../store/slices/authSlice';
import { getUsersData, saveUsersTasks } from '../../features/LS';
import { setTasksForUser } from '../../store/slices/tasksSlice';

export const RegisterPage = () => {
	const [isVisibile, setIsVisibile] = useState<boolean>(false);
	const [isAccountExist, setIsAccountExist] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const users = useSelector((state: RootState) => state.users.users);

	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		const users = getUsersData();
		dispatch(setUsersData(users));
		dispatch(setTasksForUser([]));
	}, []);

	useEffect(() => {
		saveUsersTasks(users);
	}, [users]);

	function SubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const currentUser = { username: username, password: password };

		if (authVerify(users, currentUser)) {
			setIsAccountExist(true);
			return;
		}

		dispatch(addUser(currentUser));

		dispatch(login(currentUser));
		navigate('/', { replace: true });
	}

	const eyeImg = <img src={eye} alt="eye" />;
	const eyeClosedImg = <img src={eyeClosed} alt="eyeClosed" />;

	return (
		<div className="container">
			<div className="registerWrapper">
				<h1 className="title">My Tasks</h1>
				<h2>Create an account</h2>

				<CC.Form onSubmit={SubmitForm} buttonLabel="Create an account">
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

				{isAccountExist ? <span className="highlighted">Try to login to your account.</span> : ''}

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
