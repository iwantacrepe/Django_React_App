import axios from "axios"
import {ACCESS_TOKEN} from "./constants"

const apiUrl = "/choreo-apis/djangoreactapp/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL: apiUrl//import anything specified inside an environment variable file

})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)
export default api