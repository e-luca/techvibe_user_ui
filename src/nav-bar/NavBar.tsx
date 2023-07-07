import React from 'react';
import { useNavigate } from 'react-router-dom'
import './NavBar.css';
import { NavBarItems } from '../constants';

const NavBar: React.FC = () => {
    const navigationItems = NavBarItems
    const navigate = useNavigate()

    const navigateTo = (path: string) => navigate(path)

    return (
        <div className="nav-header d-flex align-items-center gap-3 p-3">
            <img alt="Company logo"
                onClick={() => navigateTo(navigationItems[0].path)} 
                src={require('../assets/img/logo.png')} 
                className="logo">
            </img>

            {navigationItems.map((item) => (
                    <div className="nav-item p-2" 
                        onClick={() => navigateTo(item.path)}>
                    { item.label }
                </div>
                ))
            }

            <img alt="User" 
                src={require('../assets/img/user-default.jpg')} 
                className="user-image ms-auto">
            </img>
        </div>
    )
}

export default NavBar
