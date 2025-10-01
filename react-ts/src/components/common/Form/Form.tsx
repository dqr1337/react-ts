import { type FormEventHandler, type ReactNode } from 'react';
import './styles.scss';

import * as CC from '.././index';

type FormType = {
	onSubmit: FormEventHandler;
	children: ReactNode;
	buttonLabel: string;
};

export const Form = ({ onSubmit, children, buttonLabel, ...props }: FormType) => {
	return (
		<form onSubmit={onSubmit} className="loginForm" {...props}>
			{children}

			<CC.Button type="submit">{buttonLabel}</CC.Button>
		</form>
	);
};
