import React from "react";
import Home from "../home/Home";
import Devices from '../devices/Devices';
import { Routes, Route } from 'react-router-dom';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/devices' element={<Devices/>}></Route>
        </Routes>
    )
}

export default Router