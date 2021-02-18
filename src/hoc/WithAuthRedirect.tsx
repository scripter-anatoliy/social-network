import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
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


export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {

            let {isAuth, ...restProps} = props
            if (!props.isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as T}/>

    }


    let ConnectedAuthRedirectComponent = connect(mapStateForRedirectToProps)(RedirectComponent)



    return ConnectedAuthRedirectComponent
}