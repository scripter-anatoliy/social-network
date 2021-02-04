import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import { Redirect } from 'react-router-dom';



type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: any) => void
    sendMessage: () => void
    isAuth: boolean

}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>add user post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;