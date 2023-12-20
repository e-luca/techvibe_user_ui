import React, { useEffect, useState } from 'react'
import { Review } from '../../../data-models/model/Review.mode'
import './DeviceReview.css'
import Rating from '../../../utils/Rating'

interface DeviceReviewProps {
    review: Review
}

const DeviceReview: React.FC<DeviceReviewProps> = ({ review }) => {
    const [dateTime, setDateTime] = useState<Date | null>(null)

    const convertToDateTime = () => {
        const date = new Date(review.updated)

        if (isNaN(date.getTime())) return
        setDateTime(date)
    }

    useEffect(() => {
        convertToDateTime()
    }, [review])

    return (
        <div>
            <div className="card m-2">
                <div className="card-body d-flex flex-row gap-3">
                    <div className="d-flex flex-column gap-1">
                        <img alt="Reviewer" 
                            src={ review.imageUrl ? review.imageUrl : require('../../../assets/img/user-default.jpg') }  
                            className="reviewer-img" />
                        <div>{ review.username }</div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <div className="d-flex justify-content-between">
                            <Rating currentRating={ review.rating } onChange={ () => {} } editable={ false } />
                            <div className="date">{ dateTime?.toLocaleString() }</div>
                        </div>
                        <div className="w-100 me-2 mb-2 comment">{ review.comment }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceReview
