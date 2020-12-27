import React from 'react';
import { PostType} from '../../../redux/state';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


// export type MyPostType = {
//     PostType: PostType
// }


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: any
}

const MyPost = (props: PropsType) => {


    let postElement = props.posts.map(p => <Post message={p.message} liked={p.liked}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }

    }

    return (
        <div>
            <div>
                My post
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}
export default MyPost;