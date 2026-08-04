import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://6a713fbef687776c13efffcc.mockapi.io/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});