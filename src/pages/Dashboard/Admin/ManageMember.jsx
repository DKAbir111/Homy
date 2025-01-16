import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { MdRemoveModerator } from "react-icons/md";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";


export default function ManageMember() {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // const [users, setUsers] = useState([])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data
        }
    })


    const handleRole = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You are about to demote this user. This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, demote user!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Demoted!",
                                text: "The user has been successfully demoted.",
                                icon: "success",
                            });
                            refetch()
                        }
                    })
            }
        });


    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.role}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}

                            </td>
                            <td>

                                <button onClick={() => handleRole(user._id)} className="btn btn-error text-white"><MdRemoveModerator className="text-xl" /></button>
                            </td>

                        </tr>
                        )
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
