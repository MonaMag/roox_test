import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {UserType} from "../../redux/users-reducer";
import s from "../users/Users.module.css";

function Profile() {

    const users = useSelector<AppStateType, UserType[]>(state => state.users.users)
    return (
        <div className={s.container}>
            <span>Профиль пользователя</span>
            <button>Редактировать</button>

            <form>
                <input>Name</input>
                <input>User name</input>
                <input>E-mail</input>
                <input>Street</input>
                <input>City</input>
                <input>Zip code</input>
                <input>Phone</input>
                <input>Website</input>
                <textarea>Comment</textarea>
                <button>Отправить</button>
            </form>
        </div>
    )

}

export default Profile