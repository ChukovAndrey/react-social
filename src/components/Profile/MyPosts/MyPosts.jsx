import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
	const newPostElement = React.createRef();

	const addNewPost = () => {
		props.addPost();
	}

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.changeNewPostText(text);
	}

	return (
		<div>
			My Posts
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				<button onClick={addNewPost}>Add post</button>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;