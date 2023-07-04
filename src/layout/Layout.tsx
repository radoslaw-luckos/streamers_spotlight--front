import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { LogoSize } from '../utils/sizes';

type Props = {};

const Layout = (props: Props) => {
	return (
		<div>
			<Logo size={LogoSize.Big} />
			<div className='container'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
