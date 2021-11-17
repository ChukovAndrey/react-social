import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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