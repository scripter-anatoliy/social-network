import React from 'react';
import e from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {

    let posts = [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 1, message: "What's new", liked: 21}
    ]

    let postElement = posts.map ( p => <Post message={p.message} liked={p.liked}/>);

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
                {postElement}
            </div>
        </div>
    )
}
export default MyPost;