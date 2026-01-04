import axios from  'axios'

const server = "https://ecommerce-backend-79pv.onrender.com"
const localhost = "http://localhost:8000"
export const API_BASE_URL = localhost


 export const api = axios.create({
    baseURL: API_BASE_URL, 
    }) 
    const jwt = localStorage.getItem("jwt")

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';