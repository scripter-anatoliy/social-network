import React from 'react';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type PropsType = {
    posts: Array<PostType>
    newPostTextHandler: (text: string) => void
    addPost: () => void
    newPostText: string
}

const MyPost = (props: PropsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} liked={p.liked}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.newPostTextHandler(text)
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