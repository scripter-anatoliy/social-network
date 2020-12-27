import {ProfilePageType} from "./state";

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

const profileReduser = (state: ProfilePageType, action: any) => {

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


export default profileReduser;