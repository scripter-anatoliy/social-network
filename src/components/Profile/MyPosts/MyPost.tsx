import React from 'react';
import p from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div>
        <div className={p.item}>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <Post message='Hi i am Anatoliy' liked='33'/>
        <Post message="What's new" liked='21'/>
    </div>
}
export default MyPost;