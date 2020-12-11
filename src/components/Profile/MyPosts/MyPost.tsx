import React, {ChangeEvent, createRef} from 'react';
import e from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props: any) => {


    let postElement = props.posts.map((p: { message: any; liked: any; }) => <Post message={p.message}
                                                                                  liked={p.liked}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText("")
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current?.value)
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