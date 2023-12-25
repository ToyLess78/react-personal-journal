import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import {journalData} from './journalData.js';
import {CardButton} from './components/CardButton/CardButton.jsx';
function App() {
	return (
		<>
			<h1>Project</h1>
			<p>React App</p>
			<Button />
			<CardButton>
				<JournalItem
					title={journalData[0].title}
					text={journalData[0].text}
					date={journalData[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={journalData[1].title}
					text={journalData[1].text}
					date={journalData[1].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={journalData[2].title}
					text={journalData[2].text}
					date={journalData[2].date}
				/>
			</CardButton>



		</>
	);
}

export default App;
