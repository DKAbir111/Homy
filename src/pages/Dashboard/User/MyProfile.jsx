import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEnvelope, FaCalendarAlt, FaBuilding, FaDoorClosed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const MyProfile = () => {
    const { user } = useAuth();
    const [role] = useRole();
    const [info, setInfo] = useState({});
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/agreement/${user?.email}`)
            .then(res => setInfo(res.data));
    }, [axiosSecure, user?.email]);

    return (
        <div className="min-h-screen flex flex-col items-center py-10">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary-color shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mt-4">{user?.displayName}</h1>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>

                {/* User Details */}
                <div className="divide-y divide-gray-200">
                    {/* Agreement Details */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaCalendarAlt /> Agreement Details
                        </h2>
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-800">Accepted Date:</span>
                            {role === "member" ? info?.reviewDate?.split('T')[0] : "None"}
                        </p>
                    </div>

                    {/* Rented Apartment Info */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaBuilding /> Rented Apartment Info
                        </h2>
                        <div className="text-gray-600 space-y-1">
                            <p className="flex items-center gap-2">
                                <MdLocationOn className="text-primary-color" />
                                <span className="font-medium text-gray-800">Floor:</span>
                                {role === "member" ? info?.floorNo : "None"}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaBuilding className="text-primary-color" />
                                <span className="font-medium text-gray-800">Block:</span>
                                {role === "member" ? info?.blockName : "None"}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaDoorClosed className="text-primary-color" />
                                <span className="font-medium text-gray-800">Room No:</span>
                                {role === "member" ? info?.apartmentNo : "None"}
                            </p>
                        </div>
                    </div>

                    {/* User Email */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaEnvelope /> Email
                        </h2>
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-800">Email:</span> {user?.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
