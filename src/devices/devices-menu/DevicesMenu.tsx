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

    const assignIcon = (type: DeviceType) => {
        switch(type) {
            case DeviceType.AUDIO_EQUIPMENT:
                return 'bi bi-headphones'
            case DeviceType.CAMERA:
                return 'bi bi-camera'
            case DeviceType.GAMING_CONSOLES:
                return 'bi bi-controller'
            case DeviceType.LAPTOP_NOTEBOOKS:
                return 'bi bi-laptop'
            case DeviceType.MOBILE_SMARTPHONES:
                return 'bi bi-phone'
            case DeviceType.SMART_HOME_DEVICES:
                return 'bi bi-robot'
        }
    }

    const icons = deviceItems.map(device => assignIcon(device.type))

    return (
        <div className="card border-danger">
            <ul className="list-group list-group-flush">
                { deviceItems.map((item, index) => (
                        <li key={ item.type } 
                            className={ selectedDevice === item.type ? 'selected list-group-item' : 'list-group-item' }
                            onClick={ () => selectDevice(item.type) }>
                                <i className={ `${icons[index]} me-3` }/>{ item.displayName }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DevicesMenu