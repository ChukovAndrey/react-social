import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = props.state.messages.map(m => <Message message={m.message} />);

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={style.messagesArea}>
				<div className={style.messagesHeader}></div>
				<div className={style.messages}>
					{messagesElements}
				</div>
				<div className={style.postArea}>
					<textarea ></textarea>
					<button>Post</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;