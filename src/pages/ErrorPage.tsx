import React from 'react';
import { useRouteError } from 'react-router-dom';

type Props = {};

const ErrorPage = (props: Props) => {
	const error = useRouteError();
	console.log(error);

	return (
		<main>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				{error.status} {error.data}
			</p>
		</main>
	);
};

export default ErrorPage;
