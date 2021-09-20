import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
	return <nav className={style.navbar}>
		<div><a href="#">Profile</a></div>
		<div><a href="#">Messages</a></div>
		<div><a href="#">News</a></div>
		<div><a href="#">Music</a></div>
		<div><a href="#">Settings</a></div>
	</nav>;
}

export default Navbar;