import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


export default function AdminHome() {

    const axiosSecure = useAxiosSecure()


    const [stats, setStats] = useState([])
    useEffect(() => {
        axiosSecure('/admin-stats')
            .then(res => setStats(res.data))
    }, [axiosSecure])

    const availablePercentage = ((stats.availableApartment / stats.totalApartment) * 100).toFixed(1);
    const unavailablePercentage = ((stats.totalrentedApartment / stats.totalApartment) * 100).toFixed(1);
    const { user } = useAuth()
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Admin Information */}
                <div className="rounded-lg shadow-lg p-6 flex items-center justify-between">
                    <div className="flex items-center  gap-6">
                        <img
                            src={user.photoURL}
                            alt="Admin"
                            className="w-16 h-16 rounded-full object-cover border-4 border-primary-color"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{user?.displayName}</h1>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    {/* notification */}

                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {/* Total Revenue */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Total Revenue</h2>
                        <p className="text-4xl font-bold text-indigo-600">{stats.totalRevenue}</p>
                    </div>
                    {/* Total Rooms */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Total Rooms</h2>
                        <p className="text-4xl font-bold text-indigo-600">{stats.totalApartment}</p>
                    </div>

                    {/* Available Rooms */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Available Rooms</h2>
                        <p className="text-4xl font-bold text-green-500">{availablePercentage}%</p>
                        <p className="text-sm text-gray-500">{stats.availableApartment} Rooms</p>
                    </div>

                    {/* Unavailable Rooms */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Unavailable Rooms</h2>
                        <p className="text-4xl font-bold text-red-500">{unavailablePercentage}%</p>
                        <p className="text-sm text-gray-500">{stats.totalrentedApartment} Rooms</p>
                    </div>

                    {/* Total Users */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Total Users</h2>
                        <p className="text-4xl font-bold text-indigo-600">{stats.totalUser}</p>
                    </div>

                    {/* Total Members */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-600">Total Members</h2>
                        <p className="text-4xl font-bold text-indigo-600">{stats.totalMember}</p>
                    </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-lg font-semibold text-gray-600 mb-4">Room Availability</h2>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-500">Available Rooms</label>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full"
                                style={{ width: `${availablePercentage}%` }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500">Unavailable Rooms</label>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-red-500 h-4 rounded-full"
                                style={{ width: `${unavailablePercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
