import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
	return <div className={style.content}>
		<div>
			<img className={style.image} src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt="content-img" />
		</div>
	</div>;
}

export default Profile;