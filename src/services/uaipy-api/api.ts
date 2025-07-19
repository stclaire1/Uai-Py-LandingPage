import axios from 'axios';
import { VITE_UAI_PY_API_URL } from "@/constants/environment"

export const api = axios.create({
    baseURL: VITE_UAI_PY_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});