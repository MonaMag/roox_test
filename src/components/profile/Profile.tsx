import React from 'react'
import s from "./Profile.module.css";


function Profile() {

    return (
        <div className={s.profileContainer}>
            <div className={s.headerProfile}>
                <span className={s.headerTitle}>Профиль пользователя</span>
                <button className={s.headerBtn}>Редактировать</button>
            </div>

            <div className={s.formContainer}>
                <form className={s.formBlock}>
                    <div className={s.formInput}>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='email'/>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='tel'/>
                        <input type='text'/>
                        <div><textarea value={'comment'}></textarea></div>
                    </div>

                    <div className={s.btnContainer}>
                        <button type="submit" className={s.submitBtn}>Отправить</button></div>
                </form>
            </div>
        </div>
    )

}

export default Profile