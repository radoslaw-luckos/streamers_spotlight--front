import Box from '../layout/Box';
import { SlLike, SlDislike } from 'react-icons/sl';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { downvoteStreamer, getStreamer, upvoteStreamer } from '../api/Streamers';
import { motion as m } from 'framer-motion';

const StreamerPage = () => {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQuery({
		queryKey: ['streamer'],
		queryFn: () => getStreamer(id),
	});

	const upvoteMutation = useMutation({
		mutationFn: () => upvoteStreamer(id, data.upvotes),
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['streamer'] });
		},
	});
	const downvoteMutation = useMutation({
		mutationFn: () => downvoteStreamer(id, data.downvotes),
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['streamer'] });
		},
	});

	if (isLoading) return <p className='info'>Loading</p>;

	if (error) return <p className='error'>{`An error has occurred: ${error.message}`}</p>;

	return (
		<m.main
			className='streamerPageContainer'
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ ease: 'easeOut', duration: 0.65 }}
		>
			<Box>
				<h2 className='streamerPageContainer__name'>{data.name}</h2>
				<div className='streamerPageContainer__avatar'>
					<img
						src='https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
						alt='Streamers avatar'
					/>
				</div>

				<p className='streamerPageContainer__platformTag'>{data.platform}</p>
				<div className='streamerPageContainer__votes flex-row '>
					<p className='flex-row vote vote--upvote'>
						<SlLike />
						<span>{data.upvotes}</span>
					</p>
					<p className='flex-row vote vote--downvote'>
						<SlDislike />
						<span>{data.downvotes}</span>
					</p>
				</div>
				<p className='streamerPageContainer__desc'>{data.desc}</p>
				<div className='streamerPageContainer__vote flex-row'>
					<button
						className='btn btn--upvote'
						onClick={() => upvoteMutation.mutate()}
					>
						<SlLike />
					</button>

					<button
						className='btn btn--downvote'
						onClick={() => downvoteMutation.mutate()}
					>
						<SlDislike />
					</button>
				</div>
			</Box>
		</m.main>
	);
};

export default StreamerPage;
