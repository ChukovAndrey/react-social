import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (

		<div className={style.item}>
			<img src="https://sputnik.kg/images/101808/13/1018081346.jpg" />
			{props.message}
			<div>
				<span>like</span>
				{props.likesCount}
			</div>
		</div>
	);
}

export default Post;