import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
    addNewMessage: (values: FormDialogsType) => void
    newMessageBody: string
}

export type FormDialogsType = {
    newMessageBody: string
}


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    // let newMessageBody = state.newMessageBody;
    //
    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    //
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value;
    //     props.updateNewMessageBody(body)
    // }
    let addNewMessage = (values:FormDialogsType ) => {
        props.sendMessage(values.newMessageBody)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDialogsType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component="textarea" name="newMessageBody" placeholder="Enter your message"/></div>
        <div>
            <button>add user post</button>
        </div>
    </form>;
}

const AddMessageFormRedux = reduxForm<FormDialogsType>({form: "dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;