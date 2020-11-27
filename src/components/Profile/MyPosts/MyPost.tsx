import React from 'react';
import e from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props: any) => {


    let postElement = props.posts.map( (p: { message: any; liked: any; }) => <Post message={p.message} liked={p.liked}/>);

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