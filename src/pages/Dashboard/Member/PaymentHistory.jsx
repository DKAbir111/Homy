import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

export default function PaymentHistory() {
    const axiosSecure = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const { user } = useAuth()
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
        <div className="p-6 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Payment History</h2>
                {paymentHistory.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-3 border border-gray-300">Email</th>
                                <th className="p-3 border border-gray-300">Rent</th>
                                <th className="p-3 border border-gray-300">Total Paid</th>
                                <th className="p-3 border border-gray-300">Discount</th>
                                <th className="p-3 border border-gray-300">Transaction ID</th>
                                <th className="p-3 border border-gray-300">Payment Date</th>
                                <th className="p-3 border border-gray-300">Month</th>
                                <th className="p-3 border border-gray-300">Apartment Details</th>
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
                    <p className="text-center text-gray-600">No payment history available.</p>
                )}
            </div>
        </div>
    );
}
