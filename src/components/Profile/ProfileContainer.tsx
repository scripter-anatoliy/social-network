import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileUserType | null
    isAuth: boolean
    status: string
    authorizedUserId: number | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

export type OnnPropsType = MapStatePropsType & MapDispatchPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OnnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
            //this.props.history.push("/login")
            userId = "13617"
        }
        this.props.getUserProfile(+userId)
        //
        this.props.getStatus(+userId)
        // },1000)

    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)