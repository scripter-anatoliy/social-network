import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Maksim</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Evgeniy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Tolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Tatyana</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>Hello my friend! How are you?</div>
            </div>
        </div>
    )
}

export default Dialogs;