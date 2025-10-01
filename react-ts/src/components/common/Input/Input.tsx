import type { Dispatch, InputHTMLAttributes, ReactNode, SetStateAction } from 'react';
import './styles.scss';

type InputType = InputHTMLAttributes<HTMLInputElement> & {
	inputLabel?: ReactNode;
	inputValue: string;
	callBack: Dispatch<SetStateAction<string>>;
	inputType: 'text' | 'email' | 'password' | 'tel' | 'search ' | 'number' | 'date';
	inputName: string;
	children?: ReactNode;
};

export const Input = ({ inputLabel, inputValue, callBack, inputType, inputName, children, ...props }: InputType) => {
	return (
		<>
			<div className="inputWrapper">
				<span>{inputLabel}</span>
				<input value={inputValue} onChange={(e) => callBack(e.target.value)} type={inputType} name={inputName} {...props} />

				{children}
			</div>
		</>
	);
};
