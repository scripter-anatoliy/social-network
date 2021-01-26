type DialogsActionsType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export type MessagesType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessageBody: string
}

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

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return  {
            ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'} as const)
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)

export default dialogsReducer;