import {DialogsPageType} from "./store";

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

let initialState = {
        dialogs: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Evgeniy'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Tolya'},
            {id: 5, name: 'Tatiana'},
            {id: 6, name: 'Nadejda'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'Hello my friend! How are you?'},
        ],
        newMessageBody: ""
    }

const dialogsReducer = (state: DialogsPageType = initialState, action: DispatchDialogsActionsType): DialogsPageType => {

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