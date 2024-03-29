import React, { useRef, useState } from 'react'
import './Registration.css'
import UserDetails from './user-details/UserDetails'
import ProgressBar from '../utils/ProgressBar'
import UserAddress from './user-address/UserAddress'
import { User } from '../data-models/model/User.model'
import { AccessInfo } from '../data-models/model/AccessInfo.model'
import { UserAddress as Address } from '../data-models/model/UserAddress.model'
import { Registration as RegisterRequest } from '../data-models/model/Registration.model'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth/auth.service'

interface UserDetailsData {
    user: User,
    accessInfo: AccessInfo,
}

const Registration: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const [accessInfo, setAccessInfo] = useState<AccessInfo | null>(null)
    const [progressValue, setProgressValue] = useState<number>(0)
    const navigate = useNavigate()
    const service = new AuthService()

    const handleUserDetails = (data: UserDetailsData) => {
        setUser(data.user)
        setAccessInfo(data.accessInfo)
        setProgressValue(50)
    }

    const handleSubmittedData = (data: Address) => {
        if (!user || !accessInfo) return
        const request = new RegisterRequest(user, accessInfo, data)
        service.register(request).then(_ => navigate('/home'))
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