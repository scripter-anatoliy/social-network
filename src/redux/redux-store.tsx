import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer
})
export type RootState = ReturnType<typeof reducers>

let storeRedux = createStore(reducers)
export default storeRedux