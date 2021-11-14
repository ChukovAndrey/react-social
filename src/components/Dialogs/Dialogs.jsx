import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
	const dialogs = [
		{ id: 1, name: 'Andrey' },
		{ id: 2, name: 'Fedor' },
		{ id: 3, name: 'Oleg' },
		{ id: 4, name: 'Vladimir' },
		{ id: 5, name: 'Alexey' },
	];

	const messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'BB!' },
	];

	const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = messages.map(m => <Message message={m.message} />);

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;