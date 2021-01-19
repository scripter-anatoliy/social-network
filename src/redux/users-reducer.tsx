export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingtAC>

export type locationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    photos: string,
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

}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetchingtAC = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
} as const)


export default usersReducer;