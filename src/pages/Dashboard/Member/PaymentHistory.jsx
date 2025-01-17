

export default function PaymentHistory() {
    // Dummy data for payment history
    const payments = [
        {
            id: 1,
            date: "2025-01-01",
            month: "January",
            amount: 600,
            status: "Paid",
        },
        {
            id: 2,
            date: "2025-02-01",
            month: "February",
            amount: 600,
            status: "Paid",
        },
        {
            id: 3,
            date: "2025-03-01",
            month: "March",
            amount: 600,
            status: "Pending",
        },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left py-3 px-4 border-b border-gray-200">#</th>
                                <th className="text-left py-3 px-4 border-b border-gray-200">Date</th>
                                <th className="text-left py-3 px-4 border-b border-gray-200">Month</th>
                                <th className="text-left py-3 px-4 border-b border-gray-200">Amount</th>
                                <th className="text-left py-3 px-4 border-b border-gray-200">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 border-b border-gray-200">{index + 1}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{payment.date}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{payment.month}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">${payment.amount}</td>
                                    <td
                                        className={`py-3 px-4 border-b border-gray-200 font-medium ${payment.status === "Paid" ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {payment.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
