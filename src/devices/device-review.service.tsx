import { APIError } from '../data-models/model/ApiError.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { Review } from '../data-models/model/Review.mode'
import { ReviewModification } from '../data-models/model/ReviewModification.model'
import api from '../utils/api'

export class DeviceReviewService {
    private defaultError = new APIError(500, 'Internal Server Error', 'An unknown error occurred')

    async getDeviceReview(deviceId: number): Promise<APIResponse<Review>> {
        try {
            const response = await api.get(`/device/review/${deviceId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })

            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    async getDeviceReviews(deviceId: number, page: number = 0, size: number = 10): Promise<APIResponse<Review>> {
        try {
            const response = await api.get(`/device/review/${deviceId}/all`, {
                params: { page, size },
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })

            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    async reviewDevice(deviceId: number, request: ReviewModification): Promise<APIResponse<any>> {
        try {
            const response = await api.post(`/device/review/${deviceId}`, request, {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })
    
            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    async deleteReview(deviceId: number): Promise<APIResponse<any>> {
        try {
            const response = await api.delete(`/device/review/${deviceId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })

            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }
}
