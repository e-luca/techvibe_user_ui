import axios, { AxiosInstance } from 'axios'

const baseURL = `${process.env.REACT_APP_API_BASE_URL}/api`

const api: AxiosInstance = axios.create({
    baseURL
}) 

api.interceptors.request.use((config: any) => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) return
    config.headers['Authorization'] = `Bearer ${accessToken}`

    return config
})

export default api