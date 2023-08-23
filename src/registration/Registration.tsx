import React, { useRef, useState } from 'react'
import './Registration.css'
import UserDetails from './user-details/UserDetails'
import ProgressBar from '../utils/ProgressBar'
import UserAddress from './user-address/UserAddress'
import { User } from '../data-models/model/User.model'
import { AccessInfo } from '../data-models/model/AccessInfo.model'
import { UserAddress as Address } from '../data-models/model/UserAddress.model'
import { useNavigate } from 'react-router-dom'

interface UserDetailsData {
    user: User,
    accessInfo: AccessInfo,
}

const Registration: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const [accessInfo, setAccessInfo] = useState<AccessInfo | null>(null)
    const [address, setAddress] = useState<Address | null>(null)
    const [progressValue, setProgressValue] = useState<number>(0)
    const navigate = useNavigate()

    const handleUserDetails = (data: UserDetailsData) => {
        setUser(data.user)
        setAccessInfo(data.accessInfo)
        setProgressValue(50)
    }

    const handleSubmittedData = (data: Address) => {
        navigate('/home')
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center background">
            <ProgressBar currentValue={ progressValue } minValue={ 0 } maxValue={ 100 } />
            { !user && <UserDetails onSubmitData={ handleUserDetails }/> }
            { user && <UserAddress onSubmitData={ handleSubmittedData }/> }
        </div>
    )
}

export default Registration