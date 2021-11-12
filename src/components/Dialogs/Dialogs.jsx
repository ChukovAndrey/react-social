import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = `/dialogs/${props.id}`;

	return (
		<div className={style.dialog + ' ' + style.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={style.dialog}>{props.message}</div>
	);
}

const Dialogs = () => {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				<DialogItem name="Andrey" id="1" />
				<DialogItem name="Fedor" id="2" />
				<DialogItem name="Oleg" id="3" />
				<DialogItem name="Vladimir" id="4" />
				<DialogItem name="Alexey" id="5" />
			</div>
			<div className={style.messages}>
				<Message message="Hi" />
				<Message message="How are you?" />
				<Message message="BB!" />
			</div>
		</div>
	);
}

export default Dialogs;