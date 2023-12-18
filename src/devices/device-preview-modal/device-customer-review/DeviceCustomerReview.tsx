import React from 'react'
import Rating from '../../../utils/Rating'
import './DeviceCustomerReview.css'

const DeviceCustomerReview: React.FC = () => {
    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-2">
                <h4 className="align-self-center">Your review</h4>
                <div className="d-flex justify-content-between">
                    <Rating onChange={ () => {} }/>
                    <i className="bi bi-heart"></i>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Comment</label>
                    <textarea className="form-control" 
                            id="review" 
                            rows={ 4 }>
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default DeviceCustomerReview