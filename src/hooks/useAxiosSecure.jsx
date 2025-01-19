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
    const { logOut, user } = useAuth(); // Access the user object
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(
        (config) => {
            // Add the token to the request headers
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    axiosSecure.interceptors.response.use(
        (response) => response,
        (error) => {
            const status = error.response?.status;
            if ((status === 401 || status === 403) && user) {
                localStorage.removeItem('access-token');
                logOut().then(() => {
                    navigate('/auth/login');
                });
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
}
