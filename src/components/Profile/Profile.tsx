import React from 'react';
import r from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from "./MyPosts/MyPost";




const Profile = (props: any) => {

    return (
        <div className={r.item}>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
export default Profile;