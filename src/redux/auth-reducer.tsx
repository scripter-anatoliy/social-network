import {initialStateType} from "./users-reducer";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersActionsAuthType =
    ReturnType<typeof setAuthUserData>

export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null

}
export type InitialStateType = {
    data: UserDataType
    isAuth: boolean
}

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: UsersActionsAuthType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state, data: {...action.data},
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (data: UserDataType) => ({type: 'SET_USER_DATA', data} as const)
export const getAuthUserData = () => {
    return (dispatch: Dispatch<UsersActionsAuthType>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        })
    }
}

export default authReducer;