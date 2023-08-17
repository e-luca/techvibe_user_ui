import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { NavBarItems } from '../constants'

const NavBar: React.FC = () => {
    const navigationItems = NavBarItems
    const navigate = useNavigate()
    const location = useLocation()
    const isRegisterPage = location.pathname === '/login' || location.pathname === '/register'

    const navigateTo = (path: string) => navigate(path)

    if (isRegisterPage) return null

    return (
        <div className="nav-header d-flex align-items-center gap-3 p-3">
            <img alt="Company logo"
                onClick={ () => navigateTo(navigationItems[0].path) } 
                src={ require('../assets/img/logo.png') } 
                className="logo">
            </img>

            { navigationItems.map((item) => (
                    <div className="nav-item p-2" 
                        onClick={ () => navigateTo(item.path)} 
                        key={ item.label }>
                        { item.label }
                    </div>
                ))
            }

            <img alt="User" 
                src={ require('../assets/img/user-default.jpg') } 
                className="user-image ms-auto">
            </img>

            <div className="nav-item p-2"
                onClick={ () => navigateTo('/login') }>
                Login
            </div>
        </div>
    )
}

export default NavBar
