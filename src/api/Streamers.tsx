import axios from 'axios';

export const getStreamers = () => {
	return axios.get('http://localhost:5000/streamers').then((res) => res.data);
};

export const getStreamer = (id: string | undefined) => {
	return axios.get(`http://localhost:5000/streamer/${id}`).then((res) => res.data);
};
