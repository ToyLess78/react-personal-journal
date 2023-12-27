import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import {journalData} from './journalData.js';
import {CardButton} from './components/CardButton/CardButton.jsx';
import {LeftPanel} from './layouts/LeftPanel/LeftPanel.jsx';
import {Body} from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import {JournalList} from './components/JournalList/JournalList.jsx';
import {JournalAddButton} from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
function App() {

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
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
				</JournalList>

			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
			{/*<h1>Project</h1>*/}
			{/*<p>React App</p>*/}




		</div>
	);
}

export default App;
