import {UsersAPI} from "../api/api";
import {Action, Dispatch} from "redux";

export type UsersActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

export type locationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photos: {
        small: string | null
        large: string | null
    }
    followed: true | false,
    name: string,
    status: string,
    location: locationType

}
export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>

}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
    //     [ {
    //         id: 1,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //         followed: false,
    //         fullName: 'Dmitriy',
    //         status: 'I am boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //         followed: true,
    //         fullName: 'Sasha',
    //         status: 'I am boss too',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //         followed: false,
    //         fullName: 'Andrew',
    //         status: 'I am boss too',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    // ]
}
const usersReducer = (state: initialStateType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching, userId
} as const)


// Thunk - Функция санки
export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true))
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        UsersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }

            }).finally(()=>dispatch(toggleIsFollowingProgress(false, userId)))
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        UsersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export default usersReducer;