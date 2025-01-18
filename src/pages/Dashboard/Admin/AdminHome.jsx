import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";

export default function AdminHome() {
    const axiosSecure = useAxiosSecure();
    const [stats, setStats] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        axiosSecure('/admin-stats')
            .then(res => setStats(res.data));
    }, [axiosSecure]);

    const availablePercentage = ((stats.availableApartment / stats.totalApartment) * 100).toFixed(1);
    const unavailablePercentage = ((stats.totalrentedApartment / stats.totalApartment) * 100).toFixed(1);

    // Data for PieChart
    const pieChartData = [
        { name: "Available Rooms", value: stats.availableApartment || 0 },
        { name: "Unavailable Rooms", value: stats.totalrentedApartment || 0 },
    ];

    const COLORS = ["#34D399", "#EF4444"]; // Green for available, Red for unavailable

    // Prepare paymentByMonth data for the bar chart
    const paymentByMonthStats = stats.paymentByMonth?.map(payment => ({
        month: payment._id,
        totalPaid: payment.totalPaid,
    }));

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Admin Information */}
                <div className="rounded-lg shadow-lg p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <img
                            src={user?.photoURL}
                            alt="Admin"
                            className="w-16 h-16 rounded-full object-cover border-4 border-primary-color"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{user?.displayName}</h1>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>
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

                {/* Graph Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {/* Bar Chart for Monthly Payments */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-600 text-center mb-4">
                            Monthly Payment Statistics
                        </h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={paymentByMonthStats}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="totalPaid" fill="#4F46E5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Pie Chart for Room Availability */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-600 text-center mb-4">
                            Room Availability Chart
                        </h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
