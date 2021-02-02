import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../redux/auth-reducer";

type AuthDataPropsType = {
    //data: null | UserDataType
    isAuth: boolean
    login: string | null
}

const Header = (props: AuthDataPropsType ) => {
    return <header className={h.header}>
        <img src="" alt=""/>
        <div className={h.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;