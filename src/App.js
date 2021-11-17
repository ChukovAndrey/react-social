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
							render={() => <Dialogs state={props.state.dialogsPage} />} />
						<Route path="/profile"
							render={() => <Profile state={props.state.profilePage} />} />
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
