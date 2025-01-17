import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function MakePayment() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [info, setInfo] = useState(null);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [finalRent, setFinalRent] = useState(0);

    useEffect(() => {
        axiosSecure
            .get(`/agreement/${user?.email}`)
            .then((res) => {
                setInfo(res.data);
                setFinalRent(res.data?.rent || 0); // Initialize finalRent with default rent
            });
    }, [axiosSecure, user?.email]);

    const applyCoupon = () => {
        axiosSecure
            .post("/validate-coupon", { couponCode: coupon })
            .then((res) => {
                if (res.data.isValid) {
                    const discountPercentage = res.data.discountPercentage;
                    const discountedRent = info.rent - (info.rent * discountPercentage) / 100;
                    setDiscount(discountPercentage);
                    setFinalRent(discountedRent.toFixed(2));
                    Swal.fire("Success!", `Coupon applied! ${discountPercentage}% off.`, "success");
                } else {
                    Swal.fire("Invalid Coupon", "Please try a valid coupon code.", "error");
                }
            })
            .catch(() => Swal.fire("Error", "Failed to apply coupon.", "error"));
    };

    // const handlePayment = () => {
    //     Swal.fire({
    //         title: "Confirm Payment",
    //         text: `Pay $${finalRent} for apartment ${info?.apartmentNo}?`,
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonText: "Pay Now",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.post("/make-payment", { email: user.email, amount: finalRent })
    //                 .then(() => Swal.fire("Success!", "Payment completed.", "success"))
    //                 .catch(() => Swal.fire("Error!", "Payment failed.", "error"));
    //         }
    //     });
    // };

    return (
        <div className="p-6  min-h-screen">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Make Payment</h2>
                {info && (
                    <form>
                        <div className="grid grid-cols-2 gap-4 mb-6">
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
                                <select className="w-full p-2 border rounded">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium">Coupon Code</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    className="flex-1 p-2 border rounded"
                                    placeholder="Enter coupon code"
                                />
                                <button
                                    type="button"
                                    onClick={applyCoupon}
                                    className="px-4 py-2 bg-primary-color text-white rounded hover:bg-orange-600"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">
                                Final Rent: <span className="text-primary-color">${finalRent}</span>
                            </h3>
                            <h4 className="text-sm text-gray-500">
                                Discount Applied: {discount}%
                            </h4>
                        </div>

                        <Link to={'/dashboard/stripe-pay'}>
                            <button
                                className="w-full py-3 bg-primary-color text-white"
                            >
                                Pay ${finalRent}
                            </button>
                        </Link>
                    </form>
                )}
            </div>
        </div>
    );
}
