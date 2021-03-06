import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerWrapper}>
				<div className={style.headerContent}>
					<img className={style.logoImage} src="/logo192.png" alt="logo" />
					<div className={style.logoTitle}>React-social</div>
				</div>
			</div>
		</header>
	);
}

export default Header;