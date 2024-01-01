import './App.css';
// import {INITIAL_DATA} from './INITIAL_DATA.js';
import {LeftPanel} from './layouts/LeftPanel/LeftPanel.jsx';
import {Body} from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import {JournalList} from './components/JournalList/JournalList.jsx';
import {JournalAddButton} from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
import {useEffect, useState} from 'react';

function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {
		const  data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);
	useEffect(() => {
		if  (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>

		</div>
	);
}

export default App;
