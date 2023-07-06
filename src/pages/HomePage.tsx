import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { getStreamers } from '../api/Streamers';
import List from '../layout/List';
import { StreamerType } from '../utils/types';
import { IoChevronDown } from 'react-icons/io5';
import AddStreamerForm from '../components/AddStreamerForm';

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
		<main className='homePageContainer'>
			<section className='form'>
				<button
					className='toggleFormBtn'
					onClick={() => setFormOpened(!isFormOpened)}
				>
					<span>Add a streamer</span>
					<IoChevronDown />
				</button>
				{isFormOpened && <AddStreamerForm />}
			</section>
			<section className='streamers'>
				<List items={data} />
			</section>
		</main>
	);
};

export default HomePage;
