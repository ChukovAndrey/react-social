import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return <header className={style.header}>
		<img className={style.logo} src="./logo192.png" alt="logo" />
	</header>;
}

export default Header;