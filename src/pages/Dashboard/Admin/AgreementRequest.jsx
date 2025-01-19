import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AgreementRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/agreement')
            return res.data
        }
    });

    const handleAccept = (id, email) => {
        axiosSecure
            .patch(`/agreement?email=${email}&id=${id}`)
            .then((res) => {
                if (res.data.result.modifiedCount > 0 && res.data.updateUser.modifiedCount > 0) {
                    Swal.fire("Accepted!", "The agreement has been approved.", "success");
                    refetch();
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            });
    };

    const handleReject = (id) => {
        axiosSecure
            .patch(`/agreement?id=${id}`)
            .then((res) => {
                if (res.data.result.modifiedCount > 0) {
                    Swal.fire("Rejected!", "The agreement has been rejected.", "warning");
                    refetch()
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            });
    };

    return (
        <div className=" min-h-screen pt-5">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">Agreement Requests</h1>
                    <p className="text-gray-500 text-left">Request Pending:{requests.length || 0}</p>
                </div>
            </div>
            <div className="overflow-x-auto  p-5 shadow-xl bg-white mt-8">
                <div className="text-lg font-semibold text-center mb-6">
                    <p>Received Pending Request</p>
                </div>
                <table className="min-w-full table-auto">
                    <thead className="bg-primary-color text-white text-sm">
                        <tr>
                            <th className="py-2 ">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Floor</th>
                            <th className="py-2">Block</th>
                            <th className="py-2">Room</th>
                            <th className="py-2">Rent</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-50 border-b">
                                    <td className="px-6 py-4">{request.name}</td>
                                    <td className="px-6 py-4">{request.email}</td>
                                    <td className="px-6 py-4 text-center">{request.floorNo}</td>
                                    <td className="px-6 py-4 text-center">{request.blockName}</td>
                                    <td className="px-6 py-4 text-center">{request.apartmentNo}</td>
                                    <td className="px-6 py-4 text-center">${request.rent}</td>
                                    <td className="px-6 py-4 text-center">{request.date.split('T')[0]}</td>
                                    <td className="px-6 py-4 text-center flex justify-center gap-4">
                                        <button
                                            onClick={() => handleAccept(request._id, request.email)}
                                            className="btn btn-sm rounded-sm btn-success text-white"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(request._id)}
                                            className="btn btn-sm btn-error text-white rounded-sm"
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="8"
                                    className="text-center px-6 py-4 text-gray-500"
                                >
                                    No agreement requests available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequest;
