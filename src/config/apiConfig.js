import axios from  'axios'

const server = "https://ecommerce-backend-th3l.onrender.com"
const localhost = "http://localhost:8000"
export const API_BASE_URL = server


 const api = axios.create({
    baseURL: API_BASE_URL, 
    // headers: {
        //     "Authorization": `Bearer ${jwt}`,
        //     "Content-Type": "application/json"
        // }
    }) 
    const jwt = localStorage.getItem("jwt")

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api