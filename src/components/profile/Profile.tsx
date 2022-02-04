import React, {useEffect} from 'react'
import s from "./Profile.module.css";
import {getUser, UserType} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../bll/store";



function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector<AppStateType, UserType>(state => state.profile);
    const {id} = useParams()
    useEffect(() => {
        id && dispatch(getUser(+id))
    }, [dispatch, id])


    return (
        <div className={s.profileContainer}>
            <div className={s.headerProfile}>
                <span className={s.headerTitle}>Профиль пользователя</span>
                <button className={s.headerBtn}>Редактировать</button>
            </div>

            <div className={s.formContainer}>
                <form className={s.formBlock}>
                    <div className={s.formInput}>
                        <label>Name</label>   <input type='text' value={profile.name}/>
                        <label>User name</label><input type='text' value={profile.username}/>
                        <label>E-mail</label><input type='email' value={profile.email}/>
                        <label>Street</label><input type='text' value={profile.address.street}/>
                        <label>City</label><input type='text'value={profile.address.city}/>
                        <label>Zip code</label><input type='text' value={profile.address.zipcode}/>
                        <label>Phone</label><input type='tel' value={profile.phone}/>
                        <label>Website</label><input type='text' value={profile.website}/>
                        <label>Comment</label><div><textarea/></div>
                    </div>

                    <div className={s.btnContainer}>
                        <button type="submit" className={s.submitBtn}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Profile