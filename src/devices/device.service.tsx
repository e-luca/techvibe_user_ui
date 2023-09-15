import axios from 'axios'
import { DeviceType } from '../data-models/enum/DeviceType.enum'
import { Device } from '../data-models/model/Device.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { APIError } from '../data-models/model/ApiError.model'
import { Page } from '../data-models/model/Page.model'

export class DeviceService {
    private baseURL = `${process.env.REACT_APP_API_BASE_URL}/api/device`

    async getDevicesByType(type: DeviceType, page: number, size: number): Promise<APIResponse<Page<Device>>> {
        try {
            const response = await axios.get('', {
                params: { type, page, size }
            })
    
            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : new APIError(500, 'Internal Server Error', 'An unknown error occurred')
        }
    }
}