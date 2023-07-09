import { motion as m } from 'framer-motion';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<m.main
			className='errorPage'
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ ease: 'easeOut', duration: 0.65 }}
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p className='error'>
				{error.status} {error.data}
			</p>
			<button className='errorPage__btn'>
				<Link to={''}>Try to get home page!</Link>
			</button>
		</m.main>
	);
};

export default ErrorPage;
