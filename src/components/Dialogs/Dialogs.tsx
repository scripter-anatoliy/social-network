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

    let dialogs = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Evgeniy'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Tolya'},
        {id: 5, name: 'Tatiana'},
        {id: 6, name: 'Nadejda'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'Hello my friend! How are you?'},

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message message={messages[1].message} id={messages[1].id}/>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;