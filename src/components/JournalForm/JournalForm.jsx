import {useState} from 'react';
import './JournalForm.css';
import Button from '../Button/Button.jsx';

export function JournalForm() {
	const [inputData, setInputData] = useState('');
	const [state, setState] = useState({
		age: 45
	});
	const [state2, setState2] = useState([1,2,4,3]);


	const inputChange = (event) => {
		setInputData(event.target.value);
	};
	const  addJournalItem = (event) => {
		event.preventDefault();
		state.age -= 1;
		setState({...state});
		state2.push(4);
		setState2([...state2]);
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		
	};
	return(
		<form className='journal-form' onSubmit={addJournalItem}>
			{state.age}
			{state2.length}
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag' value={inputData} onChange={inputChange}/>
			<textarea name='post' id='' cols='30' rows='10'></textarea>
			<Button text='save' onClick={() => console.log('Clicked')} />

		</form>
	);
}