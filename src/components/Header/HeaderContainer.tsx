import React from 'react';
import Header from "./Header";
import axios from "axios";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {authAPI} from "../../api/api";


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
        this.props.getAuthUserData()
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

let connector = connect(mapStateToProps, {getAuthUserData});

type PropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)