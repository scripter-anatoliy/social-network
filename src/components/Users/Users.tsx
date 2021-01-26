import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';


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
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return(
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectPage:  ''}
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
                        <img src={u.photos.small ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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