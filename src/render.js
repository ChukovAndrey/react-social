import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, changeNewPostText } from './redux/state'



export const renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
		</BrowserRouter>,
		document.getElementById('root')
	);

}
