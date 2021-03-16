import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

type AuthDataPropsType = {
    //data: null | UserDataType
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: AuthDataPropsType ) => {
    return <header className={h.header}>
        <img src="" alt=""/>
        <div className={h.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>log out</button></div> :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;