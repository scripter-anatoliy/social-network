import {Redirect} from "react-router-dom";
import React from "react";
import {RootState} from "../redux/redux-store";
import {connect} from "react-redux";
import {ProfileUserType} from "../redux/profile-reducer";

type MapStatePropsType = {
    profile?: ProfileUserType | null
    isAuth: boolean
}

let mapStateForRedirectToProps = (state: RootState): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})


export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateForRedirectToProps)(RedirectComponent)



    return ConnectedAuthRedirectComponent
}