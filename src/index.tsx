import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi i am Anatoliy', liked: 33},
    {id: 1, message: "What's new", liked: 21}
]

let dialogs = [
    {id: 1, name: 'Maxim'},
    {id: 2, name: 'Evgeniy'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Tolya'},
    {id: 5, name: 'Tatiana'},
    {id: 6, name: 'Nadejda'}
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'how are you?'},
    {id: 3, message: 'Hello my friend! How are you?'},

]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
