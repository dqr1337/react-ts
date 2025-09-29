import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { TaskPage } from '../pages/TaskPage/TaskPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'tasks',
				element: <TaskPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
