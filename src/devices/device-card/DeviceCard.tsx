import React from 'react'
import './DeviceCard.css'
import { Device } from '../../data-models/model/Device.model'

interface DeviceCardProps {
    device: Device
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
    return(
        <div className="card col-3 border-danger">
            <img className="card-img-top" src={ device.imageUrl } alt={ device.shortDescription }/>
            <div className="card-body">
                <h5 className="card-title">{ device.name }</h5>
                <div className="card-text">{ device.shortDescription }</div>
                <div className="card-text">{ device.price } €</div>
            </div>
        </div>
    )
}

export default DeviceCard