
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
    })

    const handleAccept = (id, email) => {
        axiosSecure
            .patch(`/agreement?email=${email}&id=${id}`)
            .then((res) => {
                if (res.data.result.modifiedCount > 0 && res.data.updateUser.modifiedCount > 0) {
                    Swal.fire("Accepted!", "The agreement has been approved.", "success");
                    refetch()
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            });
    };

    const handleReject = (request) => {
        axiosSecure
            .post(`/agreement/reject/${request.id}`)
            .then((res) => {
                Swal.fire("Rejected!", "The agreement has been rejected.", "warning");
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            });
    };

    return (
        <div className="p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Agreement Requests</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">User Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-center">Floor No</th>
                            <th className="px-4 py-2 text-center">Block</th>
                            <th className="px-4 py-2 text-center">Room</th>
                            <th className="px-4 py-2 text-center">Rent</th>
                            <th className="px-4 py-2 text-center">Request Date</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2">{request.name}</td>
                                    <td className="px-4 py-2">{request.email}</td>
                                    <td className="px-4 py-2 text-center">{request.floorNo}</td>
                                    <td className="px-4 py-2 text-center">{request.blockName}</td>
                                    <td className="px-4 py-2 text-center">{request.roomNo}</td>
                                    <td className="px-4 py-2 text-center">${request.rent}</td>
                                    <td className="px-4 py-2 text-center">{request.date.split('T')[0]}</td>
                                    <td className="px-4 py-2 text-center flex justify-center gap-2">
                                        <button
                                            onClick={() => handleAccept(request._id, request.email)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(request)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
                                    className="text-center px-4 py-2 text-gray-500"
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
