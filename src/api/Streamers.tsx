import axios from 'axios';
import { PostStreamerType } from '../utils/types';

export const getStreamers = () => {
	return axios.get('http://localhost:5000/streamers').then((res) => res.data);
};

export const getStreamer = (id: string | undefined) => {
	return axios.get(`http://localhost:5000/streamer/${id}`).then((res) => res.data);
};

export const upvoteStreamer = (id: string | undefined, prevUpvotes: number) => {
	console.log(`Streamer ${id}, Prev: ${prevUpvotes}, Curr: ${prevUpvotes + 1}`);
	const updatedStremer = {
		upvotes: prevUpvotes + 1,
	};

	axios.put(`http://localhost:5000/streamer/${id}/vote`, updatedStremer);
};
export const downvoteStreamer = (id: string | undefined, prevDownvotes: number) => {
	console.log(`Streamer ${id}, Prev: ${prevDownvotes}, Curr: ${prevDownvotes + 1}`);
	const updatedStremer = {
		downvotes: prevDownvotes + 1,
	};

	axios.put(`http://localhost:5000/streamer/${id}/vote`, updatedStremer);
};

export const postStreamer = (data: PostStreamerType) => {
	axios.post('http://localhost:5000/streamers', data);
};