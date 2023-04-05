import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "development"
    ? 'https://localhost:7273'
    : "production url we havent set up yet";

const api = axios.create({
    baseURL: BASE_URL,
    
    headers: {
        "Content-Type": "application/json",
    }
});

// api.interceptors.request.use((config) => {
//     const state = store.getState();
//     const token = state.auth.token;

//     if(token){
//         config.headers.Authorization = "Bearer ${token}";
//     }

//     return config;
// }), (error) => { return Promise.reject(error); }


export default api;