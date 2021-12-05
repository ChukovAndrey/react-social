import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				changeNewPostText={props.changeNewPostText} />
		</div>
	);
}

export default Profile;