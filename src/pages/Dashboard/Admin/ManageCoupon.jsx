import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageCoupon = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: coupons = [], refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupon');
            return res.data;
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteCoupon = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/coupon/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coupon has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    const handleAddCoupon = (e) => {
        e.preventDefault();
        const code = e.target.code.value;
        const discount = e.target.discount.value;
        const description = e.target.description.value;
        const newCoupon = {
            code,
            discount,
            description
        };
        axiosSecure.post('/coupon', newCoupon)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Coupon added successfully');
                    e.target.reset();
                    refetch();
                }
            });
    };

    return (
        <div className="min-h-screen pt-5">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">Manage Coupons</h1>
                    <p className="text-gray-500 text-left">Coupons Available: {coupons.length || 0}</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-primary-color text-white font-medium rounded shadow hover:bg-orange-600"
                >
                    Add Coupon
                </button>
            </div>
            <div className="overflow-x-auto p-5 shadow-xl bg-white mt-8">
                <div className="text-lg font-semibold text-center mb-6">
                    <p>Available Coupons</p>
                </div>
                <table className="min-w-full table-auto">
                    <thead className="bg-primary-color text-white text-sm">
                        <tr>
                            <th className="py-2">Code</th>
                            <th className="py-2">Discount</th>
                            <th className="py-2">Description</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.length > 0 ? (
                            coupons.map((coupon) => (
                                <tr key={coupon._id} className="hover:bg-gray-50 border-b">
                                    <td className="px-6 py-4">{coupon.code}</td>
                                    <td className="px-6 py-4 text-center">{coupon.discount}%</td>
                                    <td className="px-6 py-4">{coupon.description}</td>
                                    <td className="px-6 py-4 text-center flex justify-center gap-4">
                                        <button
                                            onClick={() => handleDeleteCoupon(coupon._id)}
                                            className="btn btn-sm rounded-sm btn-error text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                                    No coupons available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-lg font-bold mb-4">Add New Coupon</h3>
                        <form onSubmit={handleAddCoupon} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
                                <input
                                    type="text"
                                    name="code"
                                    className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter coupon code"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Discount Percentage</label>
                                <input
                                    type="number"
                                    name="discount"
                                    className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter discount percentage"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter a brief description"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCoupon;
