import React from 'react';

import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// export type MyPostType = {
//     PostType: PostType
// }



// const MyPostContainer = (props: PropsType) => {
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text: string) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//
//     }
//
//     return <MyPost newPostText={props.store.getState().profileReducer.newPostText}
//                    addPost={addPost}
//                    newPostTextHandler={onPostChange}
//                    posts={props.store.getState().profileReducer.posts}/>
//
// }

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // newPostTextHandler: (text: string) => {
        //     let action = updateNewPostTextActionCreator(text)
        //     dispatch(action)
        // },
        addPost: (newPostText:string) => {dispatch(addPostActionCreator(newPostText))}
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        //newPostText: state.profilePage.newPostText
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;