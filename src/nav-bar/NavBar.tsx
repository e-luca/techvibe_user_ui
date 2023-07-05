import React from 'react';
import { useNavigate } from 'react-router-dom'
import './NavBar.css';

const NavBar: React.FC = () => {
    const navigate = useNavigate()
    const navigateTo = (path: string) => navigate(path)

    return (
        <div className="nav-header d-flex">
            <div className="nav-item" 
                onClick={() => navigateTo('/')}>
                Home
            </div>

            <div onClick={() => navigateTo('/devices')}>
                Devices
            </div>
        </div>
    )
}

export default NavBar
