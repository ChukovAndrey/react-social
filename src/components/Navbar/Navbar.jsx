import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<div className={style.item}>
				<NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
			</div>
			<div>
				<a href="#">News</a>
			</div>
			<div>
				<a href="#">Music</a>
			</div>
			<div>
				<a href="#">Settings</a>
			</div>
		</nav>
	);
}

export default Navbar;