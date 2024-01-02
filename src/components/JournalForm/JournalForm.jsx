import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer} from 'react';
import cn from 'classnames';
import {formReducer, INITIAL_STATE} from '../JournalList/JornalForm.state.js';

export function JournalForm({onSubmit}) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;

		if  (!isValid.date || !isValid.title || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});
				
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
		}
	}, [isFormReadyToSubmit]);
	const  addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		dispatchForm({type: 'SUBMIT', payload: formProps});

		
	};
	return(
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img src='/calendar.svg' alt='Caleendar icon'/>
					<span>Date</span>
				</label>
				<input type='date' name='date' id='date' className={cn(styles['input'], {
					[styles['invalid']]: !isValid.date
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Folder icon'/>
					<span>Tag</span>
				</label>
				<input type='text' name='tag' id='tag' className={styles['input']}/>
			</div>

			<textarea name='post' id='' cols='30' rows='10' className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button text='Save' />
		</form>
	);
}