import './App.css';
import {INITIAL_DATA} from './INITIAL_DATA.js';
import {LeftPanel} from './layouts/LeftPanel/LeftPanel.jsx';
import {Body} from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import {JournalList} from './components/JournalList/JournalList.jsx';
import {JournalAddButton} from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
import {useState} from 'react';
function App() {

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: Math.max(...oldItems.map(i => i.id)) + 1
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
			{/*<h1>Project</h1>*/}
			{/*<p>React App</p>*/}




		</div>
	);
}

export default App;
