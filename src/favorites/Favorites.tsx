import React, { useEffect, useState } from 'react'
import './Favorites.css'
import { Device } from '../data-models/model/Device.model'
import { DeviceService } from '../devices/device.service'
import DeviceCard from '../devices/device-card/DeviceCard'

const Favorites: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([])
    const service = new DeviceService()

    const loadDevices = () => {
        service.getFavorites(0, 10).then((response) => {
            setDevices(response.data.content)
        })
    }

    useEffect(() => {
        loadDevices()
    }, [])
    return(
        <div className="d-flex flex-column align-items-center">
            <h3 className="m-3">Favorites</h3>
            <div className="d-flex justify-content-center flex-wrap gap-3 align-items-stretch m-3">
                { devices.map((device) => (
                    <DeviceCard key={ device.id } device={ device }/>
                ))}
        </div>
        </div>
    )
}

export default Favorites