import React from 'react';
import style from './Post.module.css';

const Post = () => {
	return (

		<div className={style.item}>
			<img src="https://sputnik.kg/images/101808/13/1018081346.jpg" />
			post1
			<div>
				<span>like</span>
			</div>
		</div>
	);
}

export default Post;