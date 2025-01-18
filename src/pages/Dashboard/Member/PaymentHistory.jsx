import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

export default function PaymentHistory() {
    const axiosSecure = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axiosSecure
            .get(`/payment/${user?.email}`) // Replace with the correct API endpoint
            .then((res) => {
                setPaymentHistory(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch payment history", err);
            });
    }, [axiosSecure, user?.email]);

    return (
        <div className="min-h-screen py-6">
            <div className="text-center bg-white p-5 mb-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800">Payment History</h2>
                <p className="text-gray-500">Total Payment Details:{paymentHistory.length || 0}</p>
            </div>
            <div className="mx-auto bg-white shadow-lg rounded-lg p-8">

                <div className="overflow-x-auto">
                    {paymentHistory.length > 0 ? (
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-primary-color text-center">
                                    <th className="border border-gray-300 ">Email</th>
                                    <th className="border border-gray-300 ">Rent</th>
                                    <th className="border border-gray-300 ">Total Paid</th>
                                    <th className="border border-gray-300 ">Discount</th>
                                    <th className="border border-gray-300 ">Transaction ID</th>
                                    <th className="border border-gray-300 ">Payment Date</th>
                                    <th className="border border-gray-300 ">Month</th>
                                    <th className="border border-gray-300 ">Apartment Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentHistory.map((payment) => (
                                    <tr key={payment._id} className="hover:bg-gray-100">
                                        <td className="p-3 border border-gray-300">{payment.email}</td>
                                        <td className="p-3 border border-gray-300">${payment.rent}</td>
                                        <td className="p-3 border border-gray-300">${payment.totalPaid}</td>
                                        <td className="p-3 border border-gray-300">{payment.discount}%</td>
                                        <td className="p-3 border border-gray-300">{payment.transactionId}</td>
                                        <td className="p-3 border border-gray-300">
                                            {new Date(payment.paymentDate).toLocaleDateString()}
                                        </td>
                                        <td className="p-3 border border-gray-300">{payment.month}</td>
                                        <td className="p-3 border border-gray-300">
                                            Block: {payment.blockName}, Floor: {payment.floorNo}, Apartment: {payment.apartmentNo}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center py-4 text-gray-600">
                            <p>No payment history available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
