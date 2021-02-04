import {UsersAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

export type ContactsProfileType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type PhotosProfileType = {
    small: string,
    large: string
}
export type ProfileUserType = {
    aboutMe?: string,
    contacts: ContactsProfileType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: PhotosProfileType
}
export type PostType = {
    id: number,
    message: string,
    liked: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
    profile: ProfileUserType | null
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 2, message: "What's new", liked: 21}
    ],
    newPostText: "...message",
    profile: null
}
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
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
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const setUserProfile = (profile: ProfileUserType | null) => ({type: "SET_USER_PROFILE", profile} as const)

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        UsersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


export default profileReducer;