import React from 'react';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type PropsType = {
    posts: Array<PostType>
    //newPostTextHandler: (text: string) => void
    addPost: (newPostText: string) => void
    //newPostText: string
}

export type FormMyPostType = {
    newPostText: string
}


const MyPost = (props: PropsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} liked={p.liked}/>);

    //let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = (values: FormMyPostType) => {
        props.addPost(values.newPostText)
    }
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current?.value;
    //     if (text) {
    //         props.newPostTextHandler(text)
    //     }
    // }
    return (
        <div>
            <div>
                My post
                <div>
                    <AddMyPostReduxForm onSubmit={addPost}/>
                </div>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddMyPostForm: React.FC<InjectedFormProps<FormMyPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText"
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddMyPostReduxForm = reduxForm<FormMyPostType>({form: "ProfileAddMyPostForm"})(AddMyPostForm)

export default MyPost;