import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Maxim' id='1'/>
                <DialogItem name='Evgeniy' id='2'/>
                <DialogItem name='Sergey' id='3'/>
                <DialogItem name='Tolya' id='4'/>
                <DialogItem name='Tatiana' id='5'/>
                <DialogItem name='Nadejda' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='how are you?'/>
                <Message message='Hello my friend! How are you?'/>
            </div>
        </div>
    )
}

export default Dialogs;