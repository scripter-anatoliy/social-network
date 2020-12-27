import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import {StateType, StoreType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dispatch={props.dispatch}
                           dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/settings'
                       render={() => <Settings/>}/>
                <Route path='/friends'
                       render={() => <Sidebar/>}/>
            </div>
        </div>
    )
}

export default App;
