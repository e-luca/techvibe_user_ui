import axios from 'axios'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { APIError } from '../data-models/model/ApiError.model'
import { Registration } from '../data-models/model/Registration.model'

export class RegistrationService {

    private baseURL = 'http://localhost:8080/api/v1/auth'

    async register(request: Registration): Promise<APIResponse<void>> {
        try {
            return await axios.post( `${this.baseURL}/registration`, request)
        } catch (error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : new APIError(500, 'Internal Server Error', 'An unknown error occurred')
        }
    }

    async getSecurityQuestions(): Promise<APIResponse<string[]>> {
        try {
            return await axios.get(`${this.baseURL}/questions`)
        } catch (error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : new APIError(500, 'Internal Server Error', 'An unknown error occurred')
        }
    }
}
