import Box from '../layout/Box';
import { SlLike, SlDislike } from 'react-icons/sl';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getStreamer } from '../api/Streamers';

const StreamerPage = () => {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQuery({
		queryKey: ['streamer'],
		queryFn: () => getStreamer(id),
	});

	if (isLoading) return <p className='info'>Loading</p>;

	if (error) return <p className='error'>{`An error has occurred: ${error.message}`}</p>;

	return (
		<Box>
			<main className='streamerPage'>
				<h2 className='streamerPage__name'>{data.name}</h2>
				<div className='streamerPage__avatar'>
					<img
						src='https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
						alt='Streamers avatar'
					/>
				</div>

				<p className='streamerPage__platformTag'>{data.platform}</p>
				<p className='streamerPage__desc'>{data.desc}</p>
				<div className='streamerPage__votes flex-row'>
					<button className='btn btn--upvote'>
						<SlLike />
					</button>
					<button className='btn btn--downvote'>
						<SlDislike />
					</button>
				</div>
			</main>
		</Box>
	);
};

export default StreamerPage;
