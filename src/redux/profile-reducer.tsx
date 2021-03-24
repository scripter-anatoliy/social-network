import {ProfileAPI, UsersAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

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
    userId: number,
    photos: PhotosProfileType
}
export type PostType = {
    id: number,
    message: string,
    liked: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
    // newPostText: string
    profile: ProfileUserType | null
    status: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 2, message: "What's new", liked: 21}
    ],
    // newPostText: "...message",
    profile: null,
    status: ""
}
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3,
                message: action.newPostText,
                liked: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ""
            }
        }
        // case
        // "UPDATE-NEW-POST-TEXT"
        // :
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
            case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const setUserProfile = (profile: ProfileUserType | null) => ({type: "SET_USER_PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const)

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        UsersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

        })
    }
}

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


export default profileReducer;