import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:3000/api",
});

export const registerUser = async(data)=>await api.post('/register',data);
export const loginUser = async (data)=>await api.post('/login',data);

export default api;