import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './_shared/layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
			
			},
			{
				path: '/dashboard',
			
			},
		],
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
