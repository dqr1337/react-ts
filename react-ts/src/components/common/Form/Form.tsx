import { useState, type Dispatch, type FormEventHandler, type SetStateAction } from 'react';
import './styles.scss';

import eye from '../../../assets/icons/eye.svg';
import eyeClosed from '../../../assets/icons/eyeClosed.svg';
import * as CC from '.././index';

type FormType = {
	onSubmit: FormEventHandler;
	setUsername: Dispatch<SetStateAction<string>>;
	username: string;
	setPassword: Dispatch<SetStateAction<string>>;
	password: string;
	buttonLabel: string;
};

export const Form = ({ onSubmit, setUsername, username, setPassword, password, buttonLabel }: FormType) => {
	const [isVisibile, setIsVisibile] = useState(false);

	const eyeImg = <img src={eye} alt="eye" />;
	const eyeClosedImg = <img src={eyeClosed} alt="eyeClosed" />;

	return (
		<form onSubmit={onSubmit} className="loginForm">
			<div className="inputWrapper">
				<span>
					Username<span className="highlighted"> *</span>
				</span>
				<input value={username} onChange={(e) => setUsername(e.target.value)} type="email" name="loginInput" className="loginInput" />
			</div>

			<div className="inputWrapper">
				<span>
					Password<span className="highlighted"> *</span>
				</span>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type={isVisibile ? 'text' : 'password'} name="passwordInput" />
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
			</div>

			<CC.Button type="submit">{buttonLabel}</CC.Button>
		</form>
	);
};
