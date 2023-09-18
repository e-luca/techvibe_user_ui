import React, { useEffect, useState } from 'react'
import './DevicesBoard.css'
import { Device } from '../../data-models/model/Device.model'
import { DeviceService } from '../device.service'
import { DeviceType } from '../../data-models/enum/DeviceType.enum'
import DeviceCard from '../device-card/DeviceCard'

interface DeviceBoardProps {
    type: DeviceType,
    searchQuery: string,
    setSearchQuery: (query: string) => void
}

const DevicesBoard: React.FC<DeviceBoardProps> = ({ type, searchQuery, setSearchQuery }) => {
    const [devices, setDevices] = useState<Device[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const service = new DeviceService()

    const getDevices = () => {
        service.getDevicesByType(type, 0 , 10).then((response) => {
            setDevices(response.data.content)
            setLoading(false)
        })
    }

    const searchDevices = () => {
        if (!searchQuery) return

        service.searchDevices(searchQuery, 0, 10).then((response) => {
            setDevices(response.data.content)
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        getDevices()
        setSearchQuery('')
    }, [type])

    useEffect(() => {
        setLoading(true)
        searchDevices()
    }, [searchQuery])


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