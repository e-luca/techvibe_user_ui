import React, { useState } from 'react'
import './Devices.css'
import DevicesMenu from './devices-menu/DevicesMenu'
import { DeviceType } from '../data-models/enum/DeviceType.enum'
import DevicesBoard from './devices-board/DevicesBoard'

const Devices: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<DeviceType>(DeviceType.AUDIO_EQUIPMENT)

    const handleDeviceSelect = (device: DeviceType) => {
        setSelectedDevice(device)
    }

    return (
        <div className="d-flex p-3 gap-3">
            <div className="menu">
                <DevicesMenu onDeviceSelect={ handleDeviceSelect }/>
            </div>

            <div className="board">
                <DevicesBoard type={ selectedDevice } />
            </div>
        </div>
    )   
}

export default Devices