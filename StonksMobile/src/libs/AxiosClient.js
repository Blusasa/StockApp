import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "dev"
    ? "https://localhost:7273"
    : "backend prod url"

const AxiosClient = axios.create({
    baseURL: BASE_URL,

    headers: {
        "Content-Type": "application/json"
    }
});

export default AxiosClient;