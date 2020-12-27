import {DialogsPageType} from "./state";

export type DispatchDialogsActionsType = sendMessageCreatorType | updateNewMessageBodyCreatorType

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}

type updateNewMessageBodyCreatorType = {
    type: typeof  UPDATE_NEW_MESSAGE_BODY
    body: string
}

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: DialogsPageType, action: DispatchDialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, message: body})
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = (): sendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): updateNewMessageBodyCreatorType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;