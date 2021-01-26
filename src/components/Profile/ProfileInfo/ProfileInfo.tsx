import React from 'react';
import Preloader from "../../common/Preloader";


const ProfileInfo = (props: any) => {
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