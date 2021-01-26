import React from 'react';
import r from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPosts/MyPostContainer";


const Profile = (props: any) => {

    return (
        <div className={r.item}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;