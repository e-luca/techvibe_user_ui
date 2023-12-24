import { APIError } from '../data-models/model/ApiError.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'
import { Cart } from '../data-models/model/Cart.model'
import api from '../utils/api'

export class CartService {
    private defaultError = new APIError(500, 'Internal Server Error', 'An unknown error occurred')

    async getCart(): Promise<APIResponse<Cart>> {
        try {
            const response = await api.get('/cart', {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })
    
            return new APIResponse(response.data, response.status, response.statusText)
        } catch(error: any) {
            throw error && error.response 
                    ? new APIError(error.response.status, error.response.statusText, error.message)
                    : this.defaultError
        }
    }

    async addItemToCart(itemId: number): Promise<APIResponse<any>> {
        try {
            const response = await api.post(`/cart/${itemId}/add`, {
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