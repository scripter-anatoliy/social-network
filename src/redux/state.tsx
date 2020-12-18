type MessagesPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

type MessagesType = {
    id: number,
    message: string
}

type DialogsType = {
    id: number,
    name: string
}

type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

type PostType = {
    id: number,
    message: string,
    liked: number
}

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}

export type StoreType = {
    _state: StateType
    addPost: () => void
    renderEntireTree: (store: StoreType) => void,
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (store: StoreType) => void) => void
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
        messagesPage: {
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

            ]
        }
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            liked: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this.renderEntireTree(store);
    },
    renderEntireTree(store: StoreType) {
        console.log("hay")
    },
    updateNewPostText(newText: string) {

debugger
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree(store);
    },
    subscribe(observer: any) {
        this.renderEntireTree = observer;
    }
}
export default store;

//renderEntireTree();