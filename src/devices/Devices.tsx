import React, { useState } from 'react'
import './Devices.css'
import DevicesMenu from './devices-menu/DevicesMenu'
import { DeviceType } from '../data-models/enum/DeviceType.enum'
import DevicesBoard from './devices-board/DevicesBoard'
import Search from '../utils/Search'

const Devices: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<DeviceType>(DeviceType.AUDIO_EQUIPMENT)

    const handleDeviceSelect = (device: DeviceType) => {
        setSelectedDevice(device)
    }

    const applySearch = (searchQuery: string) => {
    }

    return (
        <div className="d-flex flex-column p-3 gap-3">
            <div className="col-3 align-self-center">
                <Search placeholder="Search devices" search={ applySearch }/>
            </div>

            <div className="d-flex gap-3">
                <div className="menu">
                    <DevicesMenu onDeviceSelect={ handleDeviceSelect }/>
                </div>

                <div className="board">
                    <DevicesBoard type={ selectedDevice } />
                </div>
            </div>
        </div>
    )   
}

export default Devices