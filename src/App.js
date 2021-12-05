import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<div className="main-content-wrapper">
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/dialogs"
						render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path="/profile"
						render={() => <Profile
							profilePage={props.state.profilePage}
							addPost={props.addPost}
							changeNewPostText={props.changeNewPostText} />} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
