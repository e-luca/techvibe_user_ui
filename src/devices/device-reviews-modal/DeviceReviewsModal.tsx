import React, { useEffect, useState } from 'react'
import './DeviceReviewsModal.css'
import { DeviceReviewService } from '../device-review.service'
import { Review } from '../../data-models/model/Review.mode'
import DeviceReview from './device-review/DeviceReview'

interface DeviceReviewsModalProps {
    show: boolean
    onHide: () => void
    deviceId: number
}

const DeviceReviewsModal: React.FC<DeviceReviewsModalProps> = ({ show, onHide, deviceId }) => {
    const [reviews, setReviews] = useState<Review[]>([])
    const [page, setPage] = useState(0)
    const service = new DeviceReviewService()

    const loadReviews = () => {
        if (!deviceId) return
        service.getDeviceReviews(deviceId, page).then((response) => {
            setReviews(response.data.content)
        })
    }

    useEffect(() => {
        loadReviews()
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
                                    <h5 className="modal-title"> Reviews </h5>
                                    <button type="button" 
                                            className="btn btn-outline-dark close-btn" 
                                            onClick={ onHide }>
                                                <i className="bi bi-x-lg"/>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    { reviews.map((review) => (
                                        <DeviceReview key={ review.id } review={ review } />
                                    )) }
                                </div>
                            </div>
                    </div>
            </div>
            <div className={ `modal-backdrop ${show ? 'show' : ''}` }></div>
        </div>
    )
}

export default DeviceReviewsModal