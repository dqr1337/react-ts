import type { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
	type?: 'button' | 'submit' | 'reset';
	children: string;
};

export const Button = ({ type, children, ...props }: ButtonType) => {
	return (
		<button type={type} className="btn" {...props}>
			{children}
		</button>
	);
};
