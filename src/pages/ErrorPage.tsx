import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<main className='errorPage'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p className='error'>
				{error.status} {error.data}
			</p>
			<button className='errorPage__btn'>
				<Link to={''}>Try to get home page!</Link>
			</button>
		</main>
	);
};

export default ErrorPage;
