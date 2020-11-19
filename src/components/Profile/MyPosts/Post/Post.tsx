import React from 'react';
import p from './Post.module.css';


const Post = (props: any) => {
    return (
        <div>
            <div className={p.item}>
                {props.message}
            </div>
            <span>Like {props.liked}</span>
        </div>

    )
}
export default Post;