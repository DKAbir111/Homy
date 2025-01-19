import { useMemo } from "react";
import axios from "axios";

export default function useAxiosPublic() {
    const axiosPublic = useMemo(() => {
        return axios.create({
            baseURL: "https://building-management-server-psi.vercel.app/api",
        });
    }, []);

    return axiosPublic;
}
