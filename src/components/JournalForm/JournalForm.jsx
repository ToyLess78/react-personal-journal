import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer, useRef} from 'react';
import cn from 'classnames';
import {formReducer, INITIAL_STATE} from '../JournalList/JornalForm.state.js';

export function JournalForm({onSubmit}) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const dateRef = useRef();
	const titleRef = useRef();
	const postRef = useRef();
	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;

		if  (!isValid.date || !isValid.title || !isValid.title) {
			focusError(isValid);
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
			dispatchForm({type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit, values, onSubmit]);

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: {[e.target.name]: e.target.value}
		});
	};
	const  addJournalItem = (event) => {
		event.preventDefault();
		dispatchForm({type: 'SUBMIT'});

		
	};
	return(
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' ref={titleRef} onChange={onChange} value={values.title} name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date'  className={styles['form-label']}>
					<img src='/calendar.svg' alt='Caleendar icon'/>
					<span>Date</span>
				</label>
				<input type='date' ref={dateRef} onChange={onChange} name='date' id='date' value={values.date} className={cn(styles['input'], {
					[styles['invalid']]: !isValid.date
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Folder icon'/>
					<span>Tag</span>
				</label>
				<input type='text' onChange={onChange} name='tag' id='tag' value={values.tag} className={styles['input']}/>
			</div>

			<textarea name='post' ref={postRef} onChange={onChange} id='' cols='30' rows='10' value={values.post} className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button text='Save' />
		</form>
	);
}