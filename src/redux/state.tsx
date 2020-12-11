
import {renderEntireTree} from "../render";

type stateType = {
    profilePage: {
        post: [
            {id: number, message: string, liked: number}
        ]
        newPostText: string
    }
    messagesPage: {
        dialogs: [
            {id: number, name: string}
        ]
        messages: [
            {id: number, message: string}
        ]
    }
}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        liked: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export default state;

//renderEntireTree();