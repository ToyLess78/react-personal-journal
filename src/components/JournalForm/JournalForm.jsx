import './JournalForm.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';

export function JournalForm({onSubmit}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});
	const  addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		let isFormValid  = true;

		if (!formProps.title?.trim().length === 0) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid =  false;
		}

		if (!formProps.text?.trim().length === 0) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid =  false;

		}

		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid =  false;
		}

		if (!isFormValid) {
			return;
		}

		onSubmit(formProps);
		
	};
	return(
		<form className='journal-form' onSubmit={addJournalItem}>

			<input type='text' name='title' style={{border: formValidState.title ? undefined : '1px solid red'}}/>
			<input type='date' name='date' style={{border: formValidState.date ? undefined : '1px solid red'}}/>
			<input type='text' name='tag'/>
			<textarea name='text' id='' cols='30' rows='10' style={{border: formValidState.text ? undefined : '1px solid red'}}></textarea>
			<Button text='save' />

		</form>
	);
}