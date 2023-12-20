import React, { useState } from 'react'
import './DeviceCard.css'
import { Device } from '../../data-models/model/Device.model'
import DevicePreviewModal from '../device-preview-modal/DevicePreviewModal'
import DeviceReviewsModal from '../device-reviews-modal/DeviceReviewsModal'

interface DeviceCardProps {
    device: Device
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
    const [showPreviewModal, setShowPreviewModal] = useState(false)
    const [showReviewsModal, setShowReviewsModal] = useState(false)

    const openPreviewModal = () => {
        setShowPreviewModal(prevState => !prevState)
    }

    const openReviewsModal = () => {
        setShowReviewsModal(prevState => !prevState)
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
                        onClick={ openPreviewModal }>
                            <i className="bi bi-binoculars"/>
                </button>
                <button type="button" 
                        className="btn btn-outline-danger"
                        title="Show reviews" 
                        onClick={ openReviewsModal }>
                            <i className="bi bi-clipboard2-check"/>
                </button>
            </div>
            { showPreviewModal && <DevicePreviewModal show={ showPreviewModal } onHide={ openPreviewModal } device={ device } /> }
            { showReviewsModal && <DeviceReviewsModal show={ showReviewsModal } onHide={ openReviewsModal } deviceId={ device.id } /> }
        </div>
    )
}

export default DeviceCard