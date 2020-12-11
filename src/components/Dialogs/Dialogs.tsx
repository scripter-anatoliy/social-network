import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogs.map( (d: { name: any; id: any; }) => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = props.state.messages.map( (m: { message: any; }) => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;