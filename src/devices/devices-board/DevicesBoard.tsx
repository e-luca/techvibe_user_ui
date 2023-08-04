import React, { useEffect, useState } from 'react'
import './DevicesBoard.css'
import { Device } from '../../data-models/model/Device.model'
import { getDevicesByType } from '../deviceService'
import { DeviceType } from '../../data-models/enum/DeviceType.enum'
import DeviceCard from '../device-card/DeviceCard'

interface DeviceBoardProps {
    type: DeviceType
}

const DevicesBoard: React.FC<DeviceBoardProps> = ({ type }) => {
    const [devices, setDevices] = useState<Device[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getDevices = async () => {
        const response = await getDevicesByType(type, 0, 10)
        setDevices(response.data.content)
        setLoading(false)
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
        <div className="spinner-border text-danger"></div>
        )
}

export default DevicesBoard