import React, { useState } from 'react'
import './DeviceCard.css'
import { Device } from '../../data-models/model/Device.model'
import DevicePreviewModal from '../device-preview-modal/DevicePreviewModal'

interface DeviceCardProps {
    device: Device
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prevState => !prevState)
    }

    return(
        <div className="card col-3 border-danger">
            <img className="card-img-top"
                src={ device.imageUrl ? device.imageUrl : require('../../assets/img/default_device.png') } 
                alt={ device.shortDescription }/>
            <div className="card-body">
                <h5 className="card-title">{ device.name }</h5>
                <div className="card-text">{ device.shortDescription }</div>
                <div className="card-text">{ device.price } €</div>
            </div>
            <div className="d-flex justify-content-end mb-3 me-3 gap-2">
                <button type="button"
                        title="Add to cart" 
                        className="btn btn-danger">
                            <i className="bi bi-cart-plus"/>
                </button>
                <button type="button" 
                        className="btn btn-outline-danger"
                        title="Preview" 
                        onClick={ openModal }>
                            <i className="bi bi-display"/>
                </button>
            </div>
            { showModal && <DevicePreviewModal show={ showModal } onHide={ openModal } device={ device } /> }
        </div>
    )
}

export default DeviceCard