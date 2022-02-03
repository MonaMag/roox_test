import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import Profile from "./components/profile/Profile";




function App() {

    return (
    <div className="App">
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Users/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/profile'} element={<Profile />}/>
                <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
