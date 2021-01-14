import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (user: Array<UserType>) => void
}

const Users = (props: UsersType) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    //     props.setUsers([
    //         {
    //             id: 1,
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //             followed: false,
    //             fullName: 'Dmitriy',
    //             status: 'I am boss',
    //             location: {city: 'Minsk', country: 'Belarus'}
    //         },
    //         {
    //             id: 2,
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //             followed: true,
    //             fullName: 'Sasha',
    //             status: 'I am boss too',
    //             location: {city: 'Moscow', country: 'Russia'}
    //         },
    //         {
    //             id: 3,
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGliH9EySG7AvSNCVfWmWXJP_5JQkUiuTA8Q&usqp=CAU',
    //             followed: false,
    //             fullName: 'Andrew',
    //             status: 'I am boss too',
    //             location: {city: 'Kiev', country: 'Ukraine'}
    //         },])
    // }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={userPhoto} className={styles.userPhoto}/>
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