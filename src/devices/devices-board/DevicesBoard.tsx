import React, { useEffect, useState } from 'react'
import './DevicesBoard.css'
import { Device } from '../../data-models/model/Device.model'
import { DeviceService } from '../device.service'
import { DeviceType } from '../../data-models/enum/DeviceType.enum'
import DeviceCard from '../device-card/DeviceCard'

interface DeviceBoardProps {
    type: DeviceType
}

const DevicesBoard: React.FC<DeviceBoardProps> = ({ type }) => {
    const [devices, setDevices] = useState<Device[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getDevices = () => {
        const service = new DeviceService()
        service.getDevicesByType(type, 0 , 10).then((response) => {
            setDevices(response.data.content)
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        getDevices()
    }, [type])


    return !loading 
    ? (
        <div className="d-flex justify-content-center flex-wrap gap-3 align-items-stretch">
            { devices.map((device) => (
                <DeviceCard key={ device.id } device={ device }/>
            ))}
        </div>
        )
    : (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="spinner-border text-danger"></div>
        </div>
        )
}

export default DevicesBoard