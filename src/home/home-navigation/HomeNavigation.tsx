import React from 'react'
import './HomeNavigation.css'
import { useNavigate } from 'react-router-dom'

const HomeNavigation: React.FC = () => {
    const navigate = useNavigate()

    const navigateTo = (path: string) => navigate(path)


    return (
        <div>
            <div className="d-flex flex-column gap-4">
                <button type="button" 
                        className="home-nav-btn btn btn-outline-danger">
                    <i className="bi bi-person"></i>
                </button>
                <button type="button" 
                        className="home-nav-btn btn btn-outline-danger" 
                        onClick={ () => navigateTo('/cart') }>
                    <i className="bi bi-cart3"></i>
                </button>
                <button type="button" 
                        className="home-nav-btn btn btn-outline-danger">
                <i className="bi bi bi-box2-heart"></i>
                </button>
            </div>
        </div>
    )
}

export default HomeNavigation