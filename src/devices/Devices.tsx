import React, { useState } from 'react'
import './Devices.css'
import DevicesMenu from './devices-menu/DevicesMenu'
import { DeviceType } from '../data-models/enum/DeviceType.enum'

const Devices: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<DeviceType | null>(null)

    const handleDeviceSelect = (device: DeviceType) => {
        setSelectedDevice(device)
    }

    return (
        <div className="d-flex p-3">
            <div className="col-2">
                <DevicesMenu onDeviceSelect={ handleDeviceSelect }/>
            </div>
        </div>
    )   
}

export default Devices