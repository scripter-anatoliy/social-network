import {ProfilePageType} from "./store";

export type DispatchProfileActionsType = AddPostActionType | UpdateNewPostTexActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTexActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 2, message: "What's new", liked: 21}
    ],
    newPostText: "...message"
}
const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                liked: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""

            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;