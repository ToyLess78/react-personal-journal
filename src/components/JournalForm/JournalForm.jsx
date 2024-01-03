import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useContext, useEffect, useReducer, useRef} from 'react';
import cn from 'classnames';
import {formReducer, INITIAL_STATE} from '../JournalList/JornalForm.state.js';
import Input from '../Input/Input.jsx';
import {UserContext} from '../context/User.context.jsx';

export function JournalForm({onSubmit}) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const {userId} = useContext(UserContext);

	const focusError = (isValid) => {
		switch(true) {
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

	useEffect(() => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: {userId}
		});
	}, [userId]);

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
				<Input type='text' ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name='title' appearence='title'/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date'  className={styles['form-label']}>
					<img src='/calendar.svg' alt='Caleendar icon'/>
					<span>Date</span>
				</label>
				<Input type='date' ref={dateRef} isValid={isValid.date} onChange={onChange} name='date' id='date' value={values.date} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Folder icon'/>
					<span>Tag</span>
				</label>
				<Input type='text' onChange={onChange} name='tag' id='tag' value={values.tag} />
			</div>

			<textarea ref={postRef} name="post" id="" onChange={onChange} value={values.post} cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button text='Save' />
		</form>

	);
}