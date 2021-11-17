import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className="main-content-wrapper">
					<Navbar />
					<div className="app-wrapper-content">
						<Route path="/dialogs"
							render={() => <Dialogs
								dialogs={props.appState.dialogs}
								messages={props.appState.messages} />} />
						<Route path="/profile"
							render={() => <Profile
								posts={props.appState.posts} />} />
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
