import ListItem from '../components/ListItem';
import { StreamerType } from '../utils/types';

type Props = {
	items: StreamerType[];
};

const List = ({ items }: Props) => {
	return (
		<ul className='list'>
			{!items.length && (
				<p>
					{' '}
					Sadly, there are no streamers yet...
					<br />
					Feel free to add one in the form above!
				</p>
			)}
			{items.map((item) => (
				<ListItem
					key={item._id}
					id={item._id}
					name={item.name}
					upvotes={item.upvotes}
					downvotes={item.downvotes}
				/>
			))}
		</ul>
	);
};

export default List;
