import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId?: string
}

type MapStatePropsType = {
    profile: ProfileUserType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType | null) => void
}

export type OnnPropsType = MapStatePropsType & MapDispatchPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OnnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


const connector = connect<MapStatePropsType,MapDispatchPropsType,{},RootState>(mapStateToProps, {setUserProfile})

export default connector(WithUrlDataContainerComponent)