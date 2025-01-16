import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: "http://localhost:5001/api",
    // headers: {
    //     'authorization': `Bearer ${localStorage.getItem('access-token')}`
    // }
})


export default function useAxiosSecure() {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    // Add a response interceptor and handle 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('access-token');
            navigate('/auth/login');
            logOut()

        }
        return Promise.reject(error);
    });
    return axiosSecure

}
