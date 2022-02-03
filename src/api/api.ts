import axios from "axios";
import {UserType} from "../redux/users-reducer";



export type GetUsersRequestType = Array<UserType>




export const usersAPI = {
    getUsers() {
        return axios.get<GetUsersRequestType>(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.data)
           /* .then(json => console.log(json))*/
    }
}


