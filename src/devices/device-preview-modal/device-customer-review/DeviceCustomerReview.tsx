import React, { ChangeEvent, useState, useEffect } from 'react'
import Rating from '../../../utils/Rating'
import './DeviceCustomerReview.css'
import { DeviceReviewService } from '../../device-review.service'
import { ReviewModification } from '../../../data-models/model/ReviewModification.model'
import { Review } from '../../../data-models/model/Review.mode'

interface DeviceCustomerReviewProps {
    deviceId: number
}

const DeviceCustomerReview: React.FC<DeviceCustomerReviewProps> = ({ deviceId }) => {

    const [rating, setRating] = useState(0)
    const [favorite, setFavorite] = useState(false)
    const [comment, setComment] = useState('')
    const [deviceReview, setDeviceReview] = useState<Review | null>(null)
    const service = new DeviceReviewService()

    const loadReview = () => {
        if (!deviceId) return

        service.getDeviceReview(deviceId).then((response) => {
            if (!response) return
            setDeviceReview(response.data)
            setRating(response.data.rating)
            setFavorite(response.data.favorite)
            setComment(response.data.comment)
        })
    }

    const review = () => {
        const request = new ReviewModification(rating, favorite, comment)
        service.reviewDevice(deviceId, request).then()
    }

    const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
    }

    const deleteReview = () => {
        service.deleteReview(deviceId).then(() => {
            setDeviceReview(null)
            setRating(0)
            setFavorite(false)
            setComment('')
        })
    }

    useEffect(() => {
        loadReview()
    }, [])

    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-2">
                <h4 className="align-self-center">Your review</h4>
                <div className="d-flex justify-content-between">
                    <Rating currentRating= { rating } onChange={ (ratingValue) => setRating(ratingValue) }/>
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
                <div className="d-flex justify-content-end gap-2">
                <button type="button" 
                        className="btn btn-danger" 
                        onClick={ review }>
                            Review
                </button>
                <button type="button" 
                        className="btn btn-outline-danger"
                        disabled={ !deviceReview } 
                        onClick={ deleteReview }>
                            Delete review
                </button>
                </div>
            </div>
        </div>
    )
}

export default DeviceCustomerReview