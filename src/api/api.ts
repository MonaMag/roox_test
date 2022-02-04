import axios from "axios";
import {UserType} from "../redux/users-reducer";



export type GetUsersRequestType = Array<UserType>




export const usersAPI = {
    getUsers() {
        return axios.get<GetUsersRequestType>(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.data)
    },
    getUser(userId: number) {
        return axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.data)

    }
}


