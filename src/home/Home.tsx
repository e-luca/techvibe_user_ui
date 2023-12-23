import React from 'react'
import './Home.css'
import HomeNavigation from './home-navigation/HomeNavigation'

const Home: React.FC = () => {
    return (
        <div>
            <div className="d-flex">
                <HomeNavigation />
            </div>
        </div>
    )
}

export default Home
