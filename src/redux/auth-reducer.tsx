import {authAPI} from "../api/api";
import {Action, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux-store";

export type UsersActionsAuthType =
    ReturnType<typeof setAuthUserData>

export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null

}
export type InitialStateType = {
    data: UserDataType
    isAuth: boolean
}

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: UsersActionsAuthType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state, data: {...action.payload}, isAuth: action.isAuth
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: 'SET_USER_DATA', payload: {userId, email, login}, isAuth} as const)
export const getAuthUserData = () => {
    return (dispatch: Dispatch<UsersActionsAuthType>) => {

        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<RootState, undefined, Action>) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}
export const logout = () => (dispatch: Dispatch<UsersActionsAuthType>) => {

    authAPI.logout().then(response => {

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer;