import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			My Posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;