import React from 'react'
import './Registration.css'
import UserDetails from './user-details/UserDetails'
import ProgressBar from '../utils/ProgressBar'
import UserAddress from './user-address/UserAddress'

const Registration: React.FC = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center background">
            <ProgressBar currentValue={ 50 } minValue={ 0 } maxValue={ 100 } />
            <UserDetails/>
            <UserAddress/>
        </div>
    )
}

export default Registration