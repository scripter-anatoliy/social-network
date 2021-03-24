import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';
import {RootState} from "../../redux/redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    error: string
}

export type LoginType = {
    isAuth: boolean,
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={"email"}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]}
                       name={"password"}
                       type={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={"rememberMe"}
                       type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})


type MapDispathToProps = { login: (email: string, password: string, rememberMe: boolean) => void };
export default connect<MapStatePropsType, MapDispathToProps, {}, RootState>(mapStateToProps, {login})(Login)

export type MapStatePropsType = {
    isAuth: boolean
}