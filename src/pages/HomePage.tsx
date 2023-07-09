import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { getStreamers } from '../api/Streamers';
import List from '../layout/List';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import AddStreamerForm from '../components/AddStreamerForm';
import { motion as m } from 'framer-motion';

const HomePage = () => {
	const [isFormOpened, setFormOpened] = useState<boolean>(false);
	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQuery({
		queryKey: ['streamers'],
		queryFn: getStreamers,
	});

	if (isLoading) return <p className='info'>Loading</p>;

	if (error) return <p className='error'>{`An error has occurred: ${error.message}`}</p>;

	return (
		<m.main
			className='homePageContainer'
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ ease: 'easeOut', duration: 0.65 }}
		>
			<section className='form'>
				<button
					className='toggleFormBtn'
					onClick={() => setFormOpened(!isFormOpened)}
				>
					<span>Add a streamer</span>
					{isFormOpened ? <IoChevronUp /> : <IoChevronDown />}
				</button>
				{isFormOpened && <AddStreamerForm />}
			</section>
			<section className='streamers'>
				<h2 className='streamers__title'>Streamers</h2>
				<List items={data} />
			</section>
		</m.main>
	);
};

export default HomePage;
