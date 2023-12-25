import { DeviceType } from '../data-models/enum/DeviceType.enum'
import { Device } from '../data-models/model/Device.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { APIError } from '../data-models/model/ApiError.model'
import { Page } from '../data-models/model/Page.model'
import api from '../utils/api'

export class DeviceService {
    private defaultError = new APIError(500, 'Internal Server Error', 'An unknown error occurred')

    async getDevicesByType(type: DeviceType, page: number, size: number): Promise<APIResponse<Page<Device>>> {
        try {
            const response = await api.get('/device', {
                params: { type, page, size },
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })
    
            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    async searchDevices(searchQuery: string, page: number, size: number): Promise<APIResponse<Page<Device>>> {
        try {
            const response = await api.get('/search', {
                params: { 'query': searchQuery, page, size }
            })

            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    
    async getFavorites(page: number, size: number): Promise<APIResponse<Page<Device>>> {
        try {
            const response = await api.get('/device/favorites', {
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
}