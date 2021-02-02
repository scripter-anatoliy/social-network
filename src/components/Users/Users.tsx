import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {toggleIsFollowingProgress, UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {UsersAPI} from "../../api/api";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    //setUsers: (user: Array<UserType>) => void
    //setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p} </span>
                })}
            </div>
            {/*{<button onClick={this.getUsers}>Get Users</button>}*/}
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/unFollow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2067694b-117f-4587-82e5-3d897a729707"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                            props.toggleIsFollowingProgress(false, u.id)
                                        }
                                    })
                            }}>Follow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2067694b-117f-4587-82e5-3d897a729707"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                            props.toggleIsFollowingProgress(false, u.id)
                                        }
                                    })
                            }}>UnFollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users