import React from 'react';
import s from './User.module.css';
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";


type UserPropsType = {
    user: UserType
}


const User = ({user}: UserPropsType) => {
    let dispatch = useDispatch()
    return (
        <div className={s.userContainer}>
            <div className={s.wrapper}>
                <div className={s.info}>
                    <div><span>ФИО: </span>{user.name}</div>
                    <div><span>город: </span> {user.address.city}</div>
                    <div><span>компания: </span> {user.company.name}</div>
                </div>
                <div className={s.linkContainer}>
                    <NavLink className={s.link}
                             to={`/profile/${user.id}`}>Подробнее</NavLink>
                </div>
            </div>
        </div>
    )
}

export default User;