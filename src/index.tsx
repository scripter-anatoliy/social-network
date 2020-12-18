import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, { StoreType } from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store._state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

store.subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
