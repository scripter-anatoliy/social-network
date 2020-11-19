import React from 'react';
import p from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div>
                My post
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div>
                <Post message='Hi i am Anatoliy' liked='33'/>
                <Post message="What's new" liked='21'/>
            </div>
        </div>
    )
}
export default MyPost;