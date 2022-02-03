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

const initState: UserType[] = []



export const usersReducer = (state: UsersStateType = initState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case 'mona/usersReducer/SET_USERS':
            return [...state, ...action.data]
        default:
            return state
    }

}
//* Action creators ---------------------------------------------------------------------------->

export const setUsers = (data: Array<UserType>) => ({type: 'mona/usersReducer/SET_USERS', data} as const)


//* Thunk creators ---------------------------------------------------------------------------->

export const getUsers = (): AppThunkType =>
    (dispatch) => {

        usersAPI.getUsers()
            .then(data => {
                debugger
                dispatch(setUsers(data))
                dispatch(setIsFetching(true))
            })
            .catch((error) => {
                    console.log(error)
                    dispatch(setIsFetching(false))
            })

    }