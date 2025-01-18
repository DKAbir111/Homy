import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


export default function useRole() {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    const { data: role, isPending: roleLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/role/${user?.email}`)
            // console.log(res.data.admin)
            return res.data.role
        }
    })

    return [role, roleLoading]
}