import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './styles.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
};

export const Button = ({ type, children, ...props }: ButtonType) => {
	return (
		<button type={type} className="btn" {...props}>
			{children}
		</button>
	);
};
