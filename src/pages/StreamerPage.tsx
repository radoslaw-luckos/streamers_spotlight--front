import Box from '../layout/Box';
import { StreamerType } from '../utils/types';
import { SlLike, SlDislike } from 'react-icons/sl';

const StreamerPage = () => {
	const MockStreamer: StreamerType = {
		_id: '64a1ed88a7ad026874bdda70',
		name: 'Radek',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor enim in vel nisi netus lobortis leo. Ornare ultricies metus etiam aliquam odio. Vitae dui diam hendrerit viverra in. Mattis magna orci.',
		platform: 'YouTube',
		upvotes: 12,
		downvotes: 15,
		__v: 0,
	};

	return (
		<main>
			<Box>
				<h2>{MockStreamer.name}</h2>
				<img
					src='/streamers_spotlight--front/src/assets/avatar.jpg'
					alt='Streamers avatar'
				/>
				<p className='platformTag'>{MockStreamer.platform}</p>
				<p className='stremerDesc'>{MockStreamer.desc}</p>
				<div className='votes'>
					<button className='votes__btn votes__btn--upvote'>
						<SlLike />
					</button>
					<button className='votes__btn votes__btn--downvote'>
						<SlDislike />
					</button>
				</div>
			</Box>
		</main>
	);
};

export default StreamerPage;
