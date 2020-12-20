import axios from 'axios';

const defaultAxiosSetup = {
    baseURL: process.env.REACT_APP_SURFY_API_ENDPOINT,
    responseType: 'json',
};

const axiosInstance = axios.create(defaultAxiosSetup);

axiosInstance.interceptors.request.use(
    async function (config) {
        config.headers['Content-Type'] = "application/json";
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export default axiosInstance;
