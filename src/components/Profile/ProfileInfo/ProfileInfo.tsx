import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type A = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: A) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/*<div>*/}
        {/*    <img src="" alt=""/>*/}
        {/*</div>*/}
        <div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo;