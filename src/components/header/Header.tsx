import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import ListImg from '../../assets/img/userList.svg'
import UserImg from '../../assets/img/avatar.svg'

function Header() {

    return (
        <div className={s.headerContainer}>
            <div className={s.title}>
                <b>RooX-test</b>
            </div>
            <div className={s.navContainer}>
                <NavLink to={'/users'} className={s.navLink}>
                    <div className={s.navLinkContext}>
                        <img src={ListImg} className={s.listImg}/>
                        <span>Users</span>
                    </div>
                </NavLink>

                <NavLink to={'/profile'} className={s.navLink}>
                    <div className={s.navLinkContext}>
                        <img src={UserImg} className={s.userImg}/>
                        <span>Profile</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
