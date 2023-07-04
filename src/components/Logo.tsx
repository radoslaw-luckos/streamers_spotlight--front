import { Link } from 'react-router-dom';
import { MdStream } from 'react-icons/md';
import { LogoSize } from '../utils/sizes';

type Props = {
	size: LogoSize;
};

const Logo = ({ size }: Props) => {
	return (
		<header className={`logo ${size}`}>
			<Link to={'/'}>
				<div className='flex-row'>
					<div className='logo__icon'>
						<MdStream />
					</div>
					<h1 className='logo__title'>
						<span className='line1'>Streamer's</span>
						<span className='line2'>Spotlight</span>
					</h1>
				</div>
			</Link>
		</header>
	);
};

export default Logo;
