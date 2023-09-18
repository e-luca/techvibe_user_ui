import axios from 'axios'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { APIError } from '../data-models/model/ApiError.model'
import { Registration } from '../data-models/model/Registration.model'
import { AuthenticationRequest } from '../data-models/model/AuthenticationRequest.model'

export class AuthService {

    private a = process.env
    private baseURL = `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth`
    private defaultErrorRespone = new APIError(500, 'Internal Server Error', 'An unknown error occurred')

    async register(request: Registration): Promise<APIResponse<void>> {
        try {
            return await axios.post( `${this.baseURL}/registration`, request)
        } catch (error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultErrorRespone
        }
    }

    async getSecurityQuestions(): Promise<APIResponse<string[]>> {
        try {
            return await axios.get(`${this.baseURL}/questions`)
        } catch (error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultErrorRespone
        }
    }

    async authenticate(request: AuthenticationRequest): Promise<APIResponse<string>> {
        try {
            return await axios.post(`${this.baseURL}/authenticate`, request)
        } catch (error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultErrorRespone
        }
    }
}
