import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import Profile from "./components/profile/Profile";
import {useSelector} from "react-redux";
import {RequestStatusType} from "./redux/app_reducer";
import {AppStateType} from "./bll/store";
import {Preloader} from "./common/preloader/Preloader";





function App() {
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)

    return (

    <div className="App">
        <div>
            {status === 'loading' && <Preloader left={'40%'} top={'40%'} size={'100px'}/>}
            <Header/>
            <Routes>
                <Route path={'/'} element={<Users/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/profile/:id'} element={<Profile />}/>
                <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
