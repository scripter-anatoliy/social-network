import React from 'react';
import r from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from "./MyPosts/MyPost";



const Profile = (props: any) => {

    return (
        <div className={r.item}>
            <ProfileInfo />
            <MyPost posts={props.posts}/>
        </div>
    )
}
export default Profile;