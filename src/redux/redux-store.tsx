import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    userPage: usersReducer
})
export type RootState = ReturnType<typeof reducers>

let storeRedux = createStore(reducers)
// export type RStoreType = typeof storeRedux
export default storeRedux