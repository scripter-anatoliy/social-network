import React from 'react';
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

// const DialogsContainer = (props: PropsType) => {
//
//     let state: RootState = props.store.getState()
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body: any) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return <Dialogs updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state.dialogsReducer}
//     />
// }
let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;