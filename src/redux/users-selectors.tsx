import {RootState} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: RootState) => {
    return state.userPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
return users.filter(u=>true)
})

export const getPageSize = (state: RootState) => {
    return state.userPage.pageSize
}

export const getTotalUsersCount = (state: RootState) => {
    return state.userPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
    return state.userPage.currentPage
}

export const getIsFetching = (state: RootState) => {
    return state.userPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
    return state.userPage.followingInProgress
}