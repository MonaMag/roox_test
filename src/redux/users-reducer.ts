import {AppThunkType} from "../bll/store";
import {setIsFetching} from "./app_reducer";
import {usersAPI} from "../api/api";


export type UsersActionsType = ReturnType<typeof setUsers>

export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}
type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType
    phone: string,
    website: string,
    company: CompanyType
}

export type UsersStateType = typeof initState

const initState = {
    users: []  as UserType[]
}


export const usersReducer = (state: UsersStateType = initState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case 'mona/usersReducer/SET_USERS':
            return {...state, users: action.users}
        default:
            return state
    }

}
//* Action creators ---------------------------------------------------------------------------->

export const setUsers = (users: Array<UserType>) => ({type: 'mona/usersReducer/SET_USERS', users} as const)

export const getUsers = (): AppThunkType =>
    (dispatch) => {

        usersAPI.getUsers()
            .then(data => {
                dispatch(setUsers(data.users))
                dispatch(setIsFetching(true))
            })
            .catch( () =>
                dispatch(setIsFetching(false))
            )

    }