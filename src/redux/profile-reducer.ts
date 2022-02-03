import {setIsFetching} from "./app_reducer";

/*
export type ProfileStateType = typeof initState*/
export type ProfileActionsType = ReturnType<typeof setUserData> | ReturnType<typeof setIsFetching>

export type UserProfileType = {
    id: string,
    name: string,
    username: string,
    email: string,
    street: string,
    city: string,
    zipcode: string,
    phone: string,
    website: string,
}

export type ProfileStateType = {
    profile: null | UserProfileType
    comment: string
}
const initState = {
    profile: {
        id: '',
        name: '',
        username: '',
        email: '',
        street: '',
        city: '',
        zipcode: '',
        phone: '',
        website: '',
    },
    comment: ''
}


export const profileReducer = (state: ProfileStateType = initState, action: ProfileActionsType): ProfileStateType => {
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

export const setUserData = (data: ProfileStateType) =>
    ({type: 'mona/profileReducer/SET_USER_DATA', data} as const)

/*//!* Thunk creators ---------------------------------------------------------------------------->

export const changeUserData = (userData: any): AppThunkType => dispatch => {
    dispatch(setIsFetching(true))
}*/

