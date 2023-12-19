import { APIError } from '../data-models/model/ApiError.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { ReviewModification } from '../data-models/model/ReviewModification.model'
import api from '../utils/api'

export class DeviceReviewService {
    private defaultError = new APIError(500, 'Internal Server Error', 'An unknown error occurred')

    async createDeviceReview(deviceId: number, request: ReviewModification): Promise<APIResponse<any>> {
        try {
            const response = await api.post(`/device/review/${deviceId}`, {
                data: { request },
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
