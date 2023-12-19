import React, { ChangeEvent, useState } from 'react'
import Rating from '../../../utils/Rating'
import './DeviceCustomerReview.css'
import { DeviceReviewService } from '../../device-review.service'
import { ReviewModification } from '../../../data-models/model/ReviewModification.model'

interface DeviceCustomerReviewProps {
    deviceId: number
}

const DeviceCustomerReview: React.FC<DeviceCustomerReviewProps> = ({ deviceId }) => {

    const [rating, setRating] = useState(0)
    const [favorite, setFavorite] = useState(false)
    const [comment, setComment] = useState('')
    const service = new DeviceReviewService()

    const review = () => {
        const request = new ReviewModification(rating, favorite, comment)
        service.createDeviceReview(deviceId, request).then()
    }

    const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
    }

    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-2">
                <h4 className="align-self-center">Your review</h4>
                <div className="d-flex justify-content-between">
                    <Rating onChange={ (ratingValue) => setRating(ratingValue) }/>
                    <i className={ `bi ${favorite ? 'bi-heart-fill' : 'bi-heart'}` } 
                    onClick={ () => setFavorite((previous) => !previous) }></i>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Comment</label>
                    <textarea className="form-control" 
                            id="review"
                            value={ comment }
                            onChange={ handleCommentChange } 
                            rows={ 4 }>
                    </textarea>
                </div>
                <div className="d-flex justify-content-end">
                <button type="button" 
                        className="btn btn-danger" 
                        onClick={ review }>
                            Review
                </button>
                </div>
            </div>
        </div>
    )
}

export default DeviceCustomerReview