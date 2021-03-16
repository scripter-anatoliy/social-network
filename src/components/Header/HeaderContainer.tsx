import React from 'react';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";


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
                       logout={this.props.logout}
        />
    }
}

let mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

let connector = connect(mapStateToProps, {getAuthUserData, logout});

type PropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)