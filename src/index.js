import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
	{ id: 2, message: 'First post', likesCount: 10 },
];

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

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
