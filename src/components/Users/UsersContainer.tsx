import {connect, ConnectedProps} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {RootState} from "../../redux/redux-store";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import {UsersAPI} from "../../api/api";

// export type UsersContainerType = {
//     follow: (userId: number) => void,
//     unfollow: (userId: number) => void,
//     setUsers: (user: Array<UserType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
// }


// type UsersPropsType = {
//     users: Array<UserType>
//     follow: (userId: number) => void,
//     unfollow: (userId: number) => void,
//     setUsers: (user: Array<UserType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
// }

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    // constructor(props: UsersType) {
    //     super(props);
    //
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         this.props.setUsers(response.data.items)
    //     })
    // }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }
    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (user: Array<UserType>): void => {
//             dispatch(setUsersAC(user))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingtAC(isFetching))
//         }
//
//     }
// }

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})
type PropsType = ConnectedProps<typeof connector>
export default connector(UsersContainer)