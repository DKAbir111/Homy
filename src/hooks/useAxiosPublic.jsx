import { useMemo } from "react";
import axios from "axios";

export default function useAxiosPublic() {
    const axiosPublic = useMemo(() => {
        return axios.create({
            baseURL: "http://localhost:5001/api",
        });
    }, []);

    return axiosPublic;
}
