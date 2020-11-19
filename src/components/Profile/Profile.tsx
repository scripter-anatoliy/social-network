import React from 'react';
import r from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div className={r.item}>
            <ProfileInfo />
            <MyPost />
        </div>
    )
}
export default Profile;