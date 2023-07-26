import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './_shared/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
				path: '/',
			},
		],
	},

	{
		path: '/login',
		element: <LoginPage />,
	},
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
