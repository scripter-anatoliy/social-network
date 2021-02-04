import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileUserType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

export type OnnPropsType = MapStatePropsType & MapDispatchPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OnnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


const connector = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {getUserProfile})

export default connector(WithUrlDataContainerComponent)