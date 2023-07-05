import { ReactElement } from 'react';

type Props = {
	children: Array<ReactElement>;
};

const Box = ({ children }: Props) => {
	return <div className='box'>{children}</div>;
};

export default Box;
