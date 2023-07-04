import React from 'react';
import { LogoSize } from '../utils/sizes';
import Logo from './Logo';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className='footer flex-row'>
			<Logo size={LogoSize.Small} />
			<p className='footer__copyrights'>© Radosław Łuckoś 2023</p>
		</footer>
	);
};

export default Footer;
