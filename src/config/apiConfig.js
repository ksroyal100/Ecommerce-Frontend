import axios from  'axios'

const server = "https://ecommerce-backend-th3l.onrender.com"
const localhost = "http://localhost:8000"
export const API_BASE_URL = server

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: API_BASE_URL, 
    // headers: {
    //     "Authorization": `Bearer ${jwt}`,
    //     "Content-Type": "application/json"
    // }
}) 