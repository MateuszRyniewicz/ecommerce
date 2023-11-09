import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './_shared/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';

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

//Korzystając z poniższej struktury: stworz mi tablice stringow

// const animals = [
//   { name: "Burek", eyes: 3, type: "cat" },
//   { name: "Milelon", type: "cat", eyes: 4 },
//   { name: "Pusia", type: "cat", eyes: 2 },
//   { name: "Puszek", type: "dog", eyes: 2 },
//   { name: "Zorka", eyes: 2, type: "dog" },
// ];

// let perfectGymTeam = [
//   {
//     name: "aaron",
//     salary: 1500,
//     age: 28,
//     position: "developer",
//   },
//   {
//     name: "beth",
//     salary: 1700,
//     age: 35,

//     position: "ui designer",
//   },
//   {
//     salary: 1870,
//     age: 22,
//     name: "cara",
//     position: "developer",
//   },
//   {
//     name: "daniel",
//     salary: 18520,
//     age: 44,
//     position: "content manager",
//   },
//   {
//     salary: 15080,
//     age: 76,
//     name: "ella",
//     position: "cto",
//   },
//   {
//     salary: 15000,
//     age: 18,
//     name

// 1. wyswietl wiek najstarszego pracownika
// 2. wyswietl wiek najmlodszego developera
//3. policz średnią zarobków osób mających więcej niz 40 lat*
// 4. znajdz pracownikow, ktorzy zarabiają więcej niz średnia wszystkich **

// 1. Pobrac Node.js
// 1,tworzysz plik student.js
// wchodzisz do katalogu gdzie jest plik
// node studet.js
