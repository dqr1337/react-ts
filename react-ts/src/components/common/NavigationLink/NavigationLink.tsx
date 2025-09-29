import { NavLink, type NavLinkProps } from 'react-router-dom';
import './styles.scss';

type NavigationLinkType = NavLinkProps & {
	icon: React.ReactNode;
	children: string;
};

export const NavigationLink = ({ icon, children, ...props }: NavigationLinkType) => {
	return (
		<NavLink {...props} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
			{icon}
			{children}
		</NavLink>
	);
};
