import {ProfilePageType} from "./store";

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>


let initialState = {
    posts: [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 2, message: "What's new", liked: 21}
    ],
    newPostText: "...message"
}
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3,
                message: state.newPostText,
                liked: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case
            "UPDATE-NEW-POST-TEXT"
        :
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
        }
    }

    export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
    export const updateNewPostTextActionCreator = (text: string) =>
        ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


    export default profileReducer;