import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import ErrorPage from './pages/ErrorPage';
import StreamerPage from './pages/StreamerPage';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'streamer/:id',
				element: <StreamerPage />,
			},
			{
				path: '',
				element: <HomePage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
