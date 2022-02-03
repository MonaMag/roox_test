import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {usersReducer} from "../redux/users-reducer";
import {appReducer} from "../redux/app_reducer";
import {profileReducer} from "../redux/profile-reducer";



const rootReducer = combineReducers({
    users: usersReducer,
    app: appReducer,
    profile: profileReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>


//* Common thunk type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

//@ts-ignore
window.store = store