import axios from 'axios';
import { StreamerType } from '../utils/types';

export const getStreamers = () => {
	axios
		.get('http://localhost:5000/streamers')
		.then((res) => {
			const data: StreamerType[] = res.data;
			console.log(data);
			return data;
		})
		.catch((error) => {
			// handle error
			console.log(error);
			return error;
		});
};
