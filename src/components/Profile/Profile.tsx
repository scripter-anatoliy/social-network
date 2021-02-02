import React from 'react';
import r from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPosts/MyPostContainer";

import {PropsType} from "./ProfileContainer";



const Profile = (props: PropsType) => {

    return (
        <div className={r.item}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;