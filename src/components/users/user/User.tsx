import React from 'react';
import s from './User.module.css';
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UserType
}


const User = ({user}: UserPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <div>{user.name}</div>
                <div>{user.address.city}</div>
                <div>{user.company.name}</div>
            </div>
            <div className={s.link}>
                <NavLink to={'/profile'}>Подробнее</NavLink>
            </div>
        </div>
    )
}

export default User;