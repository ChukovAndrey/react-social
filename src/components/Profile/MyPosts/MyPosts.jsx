import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
	const newPostElement = React.createRef();

	const addPost = () => {
		const text = newPostElement.current.value;
		if (text) props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div>
			My Posts
			<div>
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;