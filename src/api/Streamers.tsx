import axios from 'axios';
import { PostStreamerType } from '../utils/types';

export const getStreamers = () => {
	return axios.get('http://localhost:5000/streamers').then((res) => res.data);
};

export const getStreamer = (id: string | undefined) => {
	return axios.get(`http://localhost:5000/streamer/${id}`).then((res) => res.data);
};

export const upvoteStreamer = (id: string | undefined, prevUpvotes: number) => {
	const updatedStremer = {
		upvotes: prevUpvotes + 1,
	};

	return axios.put(`http://localhost:5000/streamer/${id}/vote`, updatedStremer);
};
export const downvoteStreamer = (id: string | undefined, prevDownvotes: number) => {
	const updatedStremer = {
		downvotes: prevDownvotes + 1,
	};

	return axios.put(`http://localhost:5000/streamer/${id}/vote`, updatedStremer);
};

export const postStreamer = (data: PostStreamerType) => {
	return axios.post('http://localhost:5000/streamers', data);
};