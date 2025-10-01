import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eyeClosed.svg';
import * as CC from '../../components/common/index';

export const RegisterPage = () => {
	const [isVisibile, setIsVisibile] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function SubmitForm(e) {
		e.preventDefault();
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
