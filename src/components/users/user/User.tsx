import React from 'react';
import s from '../Users.module.css';
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UserType
}


const User = ({user}: UserPropsType) => {
    return (
        <div className={s.wrapper}>
               <div>{user.name}</div>
               <div>{user.address.city}</div>
               <div>{user.company.name}</div>
            <NavLink to={'/profile'}>Подробнее</NavLink>
        </div>
    )
}

export default User;