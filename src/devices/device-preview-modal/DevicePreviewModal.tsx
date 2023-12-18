import React, { useEffect, useState } from 'react'
import './DevicePreviewModal.css'
import { Device } from '../../data-models/model/Device.model'
import DeviceCustomerReview from './device-customer-review/DeviceCustomerReview'

interface DevicePreviewModalProps {
    show: boolean
    device: Device
    onHide: () => void
}

const DevicePreviewModal: React.FC<DevicePreviewModalProps> = ({ show, device, onHide }) => {
    const [deviceType, setDeviceType] = useState('')

    const modifyDeviceType = () => {
        const parts = device.type.split('_')
        const modifiedType = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ')

        setDeviceType(modifiedType)
    }

    useEffect(() => {
        modifyDeviceType()
    }, [])

    return (
        <div>
            <div className={ `modal ${show ? 'show' : ''}` } 
                tabIndex={ -1 } 
                role="dialog" 
                style={ { display: show ? 'block' : 'none' } }>
                    <div className="modal-dialog" 
                        role="document">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <h5 className="modal-title"> { device.name } </h5>
                                    <button type="button" 
                                            className="btn btn-outline-dark close-btn" 
                                            onClick={ onHide }>
                                                <i className="bi bi-x-lg"/>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="card">
                                        <img className="card-img-top"                 
                                            src={ device.imageUrl ? device.imageUrl : require('../../assets/img/default_device.png') } 
                                            alt={ device.shortDescription } />
                                        <div className="card-body">
                                            <div className="card-text">{ device.longDescription }</div>
                                            <div className="card-text">Type: { deviceType }</div>
                                            <div className="card-text">Price: { device.price } €</div>
                                            <div className="card-text">Available: { device.available 
                                                                            ? (<i className="bi bi-cart-check"/>) 
                                                                            : (<i className="bi bi-cart-x"/>) }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer w-100">
                                    <DeviceCustomerReview />
                                </div>
                            </div>

                    </div>
            </div>
            <div className={ `modal-backdrop ${show ? 'show' : ''}` }></div>
        </div>
    )
}

export default DevicePreviewModal