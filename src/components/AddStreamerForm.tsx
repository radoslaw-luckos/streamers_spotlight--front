import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postStreamer } from '../api/Streamers';
import Box from '../layout/Box';
import { PostStreamerType, StreamerType } from '../utils/types';
import { motion as m } from 'framer-motion';

enum PlatformEnum {
	'YouTube' = 'YouTube',
	'TikTok' = 'TikTok',
	'Twitch' = 'Twitch',
	'Kick' = 'Kick',
	'Rumble' = 'Rumble',
}

interface IFormData {
	name: string;
	platform: PlatformEnum;
	desc: string;
}

const AddStreamerForm = () => {
	const queryClient = useQueryClient();
	const [newStreamer, setNewStreamer] = useState<PostStreamerType | null>(null);

	const AddStreamerMutation = useMutation({
		mutationFn: () => postStreamer(newStreamer),
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['streamers'] });
		},
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>();
	const onSubmit: SubmitHandler<IFormData> = (data) => {
		setNewStreamer({
			...data,
			upvotes: 0,
			downvotes: 0,
		});
		reset();
		AddStreamerMutation.mutate();
	};

	return (
		<m.form
			className='addStreamerForm'
			onSubmit={handleSubmit(onSubmit)}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeOut', duration: 0.35 }}
		>
			<Box>
				<div className='addStreamerForm__inputGroup'>
					<label htmlFor='name'>Enter streamer's name</label>
					<input
						type='text'
						id='name'
						{...register('name', { required: true })}
					/>
					{errors.name && <p className='error'>Streamer's name is required</p>}
				</div>
				<div className='addStreamerForm__inputGroup'>
					<label htmlFor='platform'>Choose streamer's platform</label>
					<select
						id='platform'
						{...register('platform', { required: true })}
					>
						<option value=''>Select a platform</option>
						<option value='Youtube'>YouTube</option>
						<option value='Twitch'>Twitch</option>
						<option value='TikTok'>TikTok</option>
						<option value='Kick'>Kick</option>
						<option value='Rumble'>Rumble</option>
					</select>
					{errors.platform && <p className='error'>Streamer's platform is required</p>}
				</div>
				<div className='addStreamerForm__inputGroup'>
					<label htmlFor='desc'>Say few words about this streamer</label>
					<textarea
						id='desc'
						cols={30}
						rows={10}
						{...register('desc', { required: true })}
					></textarea>
					{errors.desc && <p className='error'>Stremer's description is required</p>}
				</div>
				{AddStreamerMutation.isLoading && <p>Creating...</p>}
				{AddStreamerMutation.isError && AddStreamerMutation.error && (
					<p className='error'>{AddStreamerMutation.error.message}</p>
				)}
				{AddStreamerMutation.isSuccess && (
					<p className='success'>Success! New streamer is created!</p>
				)}
				<button
					type='submit'
					className='addStreamerForm__submitBtn'
				>
					Add
				</button>
			</Box>
		</m.form>
	);
};

export default AddStreamerForm;
