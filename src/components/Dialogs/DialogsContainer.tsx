import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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

    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // updateNewMessageBody: (body: string) => {
        //     dispatch(updateNewMessageBodyCreator(body))
        // },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)

)(Dialogs)
;