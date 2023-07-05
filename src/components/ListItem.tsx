import { SlLike, SlDislike } from 'react-icons/sl';
import { Link } from 'react-router-dom';

type Props = {
	id: string;
	name: string;
	upvotes: number;
	downvotes: number;
};

const ListItem = ({ id, name, upvotes, downvotes }: Props) => {
	return (
		<li className='listItem'>
			<Link to={`streamer/${id}`}>
				<h3 className='listItem__name'>{name}</h3>
				<div className='listItem__votes'>
					<p className='flex-row vote'>
						<SlLike />
						<span>{upvotes}</span>
					</p>
					<p className='flex-row vote'>
						<SlDislike />
						<span>{downvotes}</span>
					</p>
				</div>
			</Link>
		</li>
	);
};

export default ListItem;
