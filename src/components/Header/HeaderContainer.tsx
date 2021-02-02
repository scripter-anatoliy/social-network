import React from 'react';
import Header from "./Header";
import axios from "axios";
import {setAuthUserData, UserDataType} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {ProfileUserType} from "../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";


// type MapStatePropsType = {
//     data: null | UserDataType
// }
//
// type MapDispatchPropsType = {
//     setAuthUserData: (data: null | UserDataType) => void
// }
//
// export type OnnPropsType = MapStatePropsType & MapDispatchPropsType
//
// export type PropsType = RouteComponentProps<PathParamsType> & OnnPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
        />
    }
}

let mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

let connector = connect(mapStateToProps, {setAuthUserData});

type PropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)