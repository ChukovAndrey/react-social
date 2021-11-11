import React from 'react';
import style from './Footer.module.css';

const Header = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footerWrapper}>
				<div className={style.footerContent}>
					React-social project 2021
				</div>
				<div className={style.footerLinks}></div>
			</div>
		</footer>
	);
}

export default Header;