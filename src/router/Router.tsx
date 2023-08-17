import React from "react";
import Home from "../home/Home";
import Devices from '../devices/Devices';
import { Routes, Route } from 'react-router-dom';
import Login from "../login/Login";
import Registration from "../registration/Registration";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/devices' element={ <Devices/> }></Route>
            <Route path='/login' element={ <Login/> }></Route>
            <Route path='/register' element={ <Registration/> }></Route>
        </Routes>
    )
}

export default Router