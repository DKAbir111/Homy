import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";
import { FaArrowTrendUp, FaUserCheck } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CgUnavailable } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
export default function AdminHome() {
    const axiosSecure = useAxiosSecure();
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalApartment: 0,
        availableApartment: 0,
        totalrentedApartment: 0,
        totalUser: 0,
        totalMember: 0,
        paymentByMonth: [],
    });
    const { user } = useAuth();

    useEffect(() => {
        axiosSecure('/admin-stats')
            .then(res => setStats(res.data));
    }, [axiosSecure]);

    const availablePercentage = parseFloat((stats.availableApartment / stats.totalApartment) * 100).toFixed(1);
    const unavailablePercentage = parseFloat((stats.totalrentedApartment / stats.totalApartment) * 100).toFixed(1);

    // Data for PieChart
    const pieChartData = [
        { name: "Available Rooms", value: stats.availableApartment || 0 },
        { name: "Unavailable Rooms", value: stats.totalrentedApartment || 0 },
    ];

    const COLORS = ["#00000", "#FF6725"]; // Green for available, Red for unavailable

    // Prepare paymentByMonth data for the bar chart
    const paymentByMonthStats = stats.paymentByMonth?.map(payment => ({
        month: payment._id,
        totalPaid: payment.totalPaid,
    }));

    return (
        <div className="min-h-screen py-5">
            <div className="max-w-6xl mx-auto">
                {/* Admin Information */}
                <div className="rounded-lg shadow-lg p-6 flex items-center justify-between bg-white">
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
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className=" text-gray-500">Total Revenue</h2>
                            <p className="text-4xl font-bold text-primary-color">{stats.totalRevenue} $</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 bg-primary-color flex justify-center items-center rounded-full shadow-lg shadow-orange-300">  <FaArrowTrendUp /></span>
                    </div>

                    {/* Total Rooms */}
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className="text-gray-500">Total Rooms</h2>
                            <p className="text-4xl font-bold">{stats.totalApartment}</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 bg-black flex justify-center items-center rounded-full shadow-lg shadow-gray-400">  <PiBuildingApartmentFill /> </span>
                    </div>

                    {/* Available Rooms */}
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className="text-gray-500">Available Rooms</h2>
                            <p className="text-4xl font-bold text-primary-color">{availablePercentage}%</p>
                            <p className="text-xs text-gray-400">{stats.availableApartment} Rooms</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 bg-primary-color flex justify-center items-center rounded-full shadow-lg shadow-orange-300"> <IoMdCheckmarkCircleOutline /> </span>
                    </div>

                    {/* Unavailable Rooms */}
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className="text-gray-500">Unavailable Rooms</h2>
                            <p className="text-4xl font-bold">{unavailablePercentage}%</p>
                            <p className="text-xs text-gray-500">{stats.totalrentedApartment} Rooms</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 bg-black flex justify-center items-center rounded-full shadow-lg shadow-gray-400"> <CgUnavailable /> </span>
                    </div>

                    {/* Total Users */}
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className="text-gray-500">Total Users</h2>
                            <p className="text-4xl font-bold">{stats.totalUser}</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 flex bg-black justify-center items-center rounded-full shadow-lg shadow-gray-400"> <FaUserFriends /> </span>
                    </div>

                    {/* Total Members */}
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 text-center flex items-center justify-between">
                        <div>
                            <h2 className="text-gray-500">Total Members</h2>
                            <p className="text-4xl font-bold">{stats.totalMember}</p>
                        </div>
                        <span className="text-2xl text-white h-16 w-16 bg-black flex justify-center items-center rounded-full shadow-lg shadow-gray-400"> <FaUserCheck /></span>
                    </div>
                </div>

                {/* Graph Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {/* Bar Chart for Monthly Payments */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-semibold  text-center mb-4">
                            Monthly Payment Statistics
                        </h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={paymentByMonthStats}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="totalPaid" fill="#FF6725" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Pie Chart for Room Availability */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center items-center flex-col">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Room Availability Chart
                        </h2>
                        <ResponsiveContainer width="100%" height={400}>
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
