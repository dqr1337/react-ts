import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TaskPage = lazy(() => import('../pages/TaskPage/TaskPage'));

import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

import { RequireAuth } from './RequireAuth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback="Loading...">
						<HomePage />
					</Suspense>
				),
			},
			{
				element: <RequireAuth />,
				children: [
					{
						path: 'tasks',
						element: (
							<Suspense fallback="Loading...">
								<TaskPage />
							</Suspense>
						),
					},
				],
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
