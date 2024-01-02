import './JournalList.css';
import {CardButton} from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

export function JournalList({ items }) {
	if (items.length === 0) {
		return <p>There are no posts yet, add the first one.</p>;
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		return -1;
	};
	return <>{items.sort(sortItems).map(el => (
		<CardButton key={el.id}>
			<JournalItem
				title={el.title}
				post={el.post}
				date={el.date}
			/>
		</CardButton>
	))}</>;
}


