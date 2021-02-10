import React from 'react';
import Preloader from "../../common/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";


type A = {
    profile: ProfileUserType | null
}

const ProfileInfo = (props:A) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img src="" alt=""/>
        </div>
        <div>
            <img src={props.profile.photos.large} alt=""/>
            ava+description
        </div>
    </div>
}
export default ProfileInfo;