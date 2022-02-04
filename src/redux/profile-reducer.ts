import {setStatus} from "./app_reducer";
import {UserType} from "./users-reducer";

export type ProfileActionsType = ReturnType<typeof setUserData> | ReturnType<typeof setStatus>

export type UserProfileType = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }},
    phone: string,
    website: string,
}

const initState = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }},
    phone: '',
    website: '',
}  as UserType;


export const profileReducer = (state: UserType = initState, action: ProfileActionsType): UserType => {
    switch (action.type) {
        case 'mona/profileReducer/SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }

}
//* Action creators ---------------------------------------------------------------------------->

export const setUserData = (data: UserType) =>
    ({type: 'mona/profileReducer/SET_USER_DATA', data} as const)

/*//!* Thunk creators ---------------------------------------------------------------------------->

export const changeUserData = (userData: any): AppThunkType => dispatch => {
    dispatch(setStatus('succeeded'))
}*/

