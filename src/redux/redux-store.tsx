import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type RootState = ReturnType<typeof reducers>

let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware))
export default storeRedux