import axios from "axios"


export default function useAxiosPublic() {
    const axiosPublic = axios.create({
        baseURL: "http://localhost:5001/api",
    })
    return axiosPublic
}
