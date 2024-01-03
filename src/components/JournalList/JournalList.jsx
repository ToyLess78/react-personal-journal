import './JournalList.css';
import {CardButton} from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';
import {useContext, useMemo} from 'react';
import {UserContext} from '../context/User.context.jsx';

export function JournalList({ items }) {
	const {userId} = useContext(UserContext);
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		return -1;
	};
	const filteredItems = useMemo(() => items
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]) ;
	if (items.length === 0) {
		return <p>There are no posts yet, add the first one.</p>;
	}

	return <>{filteredItems
		.map(el => (
			<CardButton key={el.id}>
				<JournalItem
					title={el.title}
					post={el.post}
					date={el.date}
				/>
			</CardButton>
		))}</>;
}


