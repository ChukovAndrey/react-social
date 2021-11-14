import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	const posts = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'First post', likesCount: 10 },
	];

	const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	return (
		<div>
			My Posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;