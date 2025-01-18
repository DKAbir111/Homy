import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function MakePayment() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [info, setInfo] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        axiosSecure
            .get(`/agreement/${user?.email}`)
            .then((res) => {
                setInfo(res.data);
            });
    }, [axiosSecure, user?.email]);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Make Payment</h2>
                {info && (
                    <form>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-gray-600 font-medium">Member Email</label>
                                <input type="text" value={info.email} readOnly className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Floor No</label>
                                <input type="text" value={info.floorNo} readOnly className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Block Name</label>
                                <input type="text" value={info.blockName} readOnly className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Apartment No</label>
                                <input type="text" value={info.apartmentNo} readOnly className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Rent</label>
                                <input type="text" value={`$${info.rent}`} readOnly className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Month</label>
                                <select
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" disabled>Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                        </div>

                        <Link
                            to="/dashboard/stripe-pay"
                            state={{
                                info: info,
                                month: selectedMonth,
                            }}
                        >
                            <button
                                disabled={!selectedMonth}
                                className={`w-full py-3 text-white ${selectedMonth ? "bg-primary-color" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Pay ${info?.rent}
                            </button>
                        </Link>
                    </form>
                )}
            </div>
        </div>
    );
}
