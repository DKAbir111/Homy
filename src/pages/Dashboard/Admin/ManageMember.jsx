import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdRemoveModerator } from "react-icons/md";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

export default function ManageMember() {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Fetching users data
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    });

    // Handle Role demotion
    const handleRole = (email) => {
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
                axiosSecure.patch(`/user/${email}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Demoted!",
                                text: "The user has been successfully demoted.",
                                icon: "success",
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div className="min-h-screen pt-5">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800">Manage Members</h1>
                        <p className="text-gray-500 text-left">Total members: {users.length}</p>
                    </div>
                </div>

                {/* Members Table Section */}
                <div className="overflow-x-auto mt-8 bg-white rounded-lg shadow-lg p-6">
                    <div className="text-lg font-semibold text-center mb-6">
                        <p>All Registered Members</p>
                    </div>
                    <table className="table w-full">
                        {/* Table Header */}
                        <thead className="bg-primary-color text-white">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user.photo}
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm text-gray-500">{user.role}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`badge text-white ${user.role === 'admin' ? 'badge-error bg-primary-color' : 'badge-success'}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <button onClick={() => handleRole(user.email)} className="btn bg-primary-color text-white">
                                                <MdRemoveModerator className="text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        {/* Table Footer */}
                        <tfoot>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
