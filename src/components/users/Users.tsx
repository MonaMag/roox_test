import React, {useEffect} from 'react'
import s from './Users.module.css'
import User from "./user/User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {getUsers, UserType} from "../../redux/users-reducer";


function Users() {
    const dispatch = useDispatch()
    const users = useSelector<AppStateType, UserType[]>(state => state.users)
    console.log('users', users)


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


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