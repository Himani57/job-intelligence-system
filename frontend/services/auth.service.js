import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials:true
});

export const registerUser = async(data)=>await api.post('/register',data);
export const loginUser = async (data)=>await api.post('/login',data);
export const analyzeResume = async(data)=>await api.post('/addResume',data);
export const getAllJobs = async (page = 1)=>await api.get(`/jobs?page=${page}&limit=4`);

export default api;