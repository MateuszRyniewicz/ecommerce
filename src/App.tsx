import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './_shared/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import BasketPage from './pages/BasketPage';
import Summary from './components/home/Summary';
import Shop from './components/home/Shop';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/dashboard',
				element: <DashboardPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{ path: '/shop', element: <Shop /> },
			{
				path: '/basket',
				element: <BasketPage />,
			},
			{
				path: '/summary/:totalPrice',
				element: <Summary />,
			},
		],
	},

	// {
	// 	path: '/login',
	// 	element: <LoginPage />,
	// },
	// {
	// 	path: '/register',
	// 	element: <RegisterPage />,
	// },
]);

const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
