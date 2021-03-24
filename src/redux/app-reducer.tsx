import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

export type InitializedSuccessType =
    ReturnType<typeof initializedSuccess>

export type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}
const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = () => (
    {type: 'INITIALIZED_SUCCESS'} as const)
export const initializeApp = () => {
    return (dispatch: Dispatch<InitializedSuccessType>) => {
        let promise = getAuthUserData()
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess())
        })

    }
}

export default appReducer;