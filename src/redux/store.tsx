import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessageBody: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type DialogsType = {
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

export type PostType = {
    id: number,
    message: string,
    liked: number
}

export type FriendsType = {
    id: number,
    name: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: Array<FriendsType>
}

export type StoreType = {
    _state: StateType
    getState: () => void
    _callSubscribe: () => void
    // addPost: () => void
    // renderEntireTree: (store: StoreType) => void,
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: (store: StoreType) => void) => void
    dispatch: (action: { type: string }) => void
}
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi i am Anatoliy', liked: 33},
                {id: 2, message: "What's new", liked: 21}
            ],
            newPostText: "...message"

        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Evgeniy'},
            {id: 3, name: 'Sergey'},
        ]
    },
    getState() {
        return this._state
    },
    _callSubscribe(state: StateType) {
        console.log("yoyoyo")
    },
    /*    addPost() {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                liked: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscribe(this._state);
        },
        renderEntireTree(store: StoreType) {
            console.log("hay")
        },
        updateNewPostText(newText: string) {
            this._state.profilePage.newPostText = newText;
            this._callSubscribe(this._state);
        },*/
    subscribe(observer: any) {
        this._callSubscribe = observer;
    },

    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }
}

export default store;

//renderEntireTree();