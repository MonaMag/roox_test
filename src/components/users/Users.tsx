import React from 'react'
import s from './Users.module.css'
import User from "./user/User";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {UserType} from "../../redux/users-reducer";


function Users() {

    const users = useSelector<AppStateType, UserType[]>(state => state.users.users)
    console.log('users', users)
    return (
        <div className={s.container}>
            <div className={s.sortBlock}>
                <span>Сортировка</span>
                <button>по городу</button>
                <button>по компании</button>
            </div>
            <div className={s.usersBlock}>
                <span>Список пользователей</span>
                {users.map ( u =>
                    <div key={u.id}><User user={u}/>
                    </div>
                    )}
            </div>
        </div>
    )

}

export default Users