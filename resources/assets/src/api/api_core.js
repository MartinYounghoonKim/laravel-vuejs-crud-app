import axios from 'axios';

const apiCore = axios.create({
    baseURL: '/api',
    timeout: 1000,
    responseType: 'json'
});

export default apiCore;