import React, { useState } from 'react'
import './DevicesMenu.css'
import { DeviceTypeInfo } from '../../data-models/model/DeviceTypeInfo.model'
import { DeviceMenuItems } from '../../constants'
import { DeviceType } from '../../data-models/enum/DeviceType.enum'

interface DevicesMenuProps {
    onDeviceSelect: (device: DeviceType) => void
}

const DevicesMenu: React.FC<DevicesMenuProps> = ({ onDeviceSelect }) => {
    const deviceItems: DeviceTypeInfo[] = DeviceMenuItems
    const [selectedDevice, setSelectedDevice] = useState<DeviceType | null>(null)

    const selectDevice = (device: DeviceType) => {
        setSelectedDevice(device)
        onDeviceSelect(device)
    }

    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                { deviceItems.map((item) => (
                        <li key={ item.type } 
                            className={ selectedDevice === item.type ? 'selected list-group-item' : 'list-group-item' }
                            onClick={ () => selectDevice(item.type) }>
                                { item.displayName }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DevicesMenu