import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageCoupon = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()



    const { data: coupons = [], refetch } = useQuery({
        queryKey: ['couppons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupon')
            return res.data
        }
    })


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
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
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
        }
        axiosSecure.post('/coupon', newCoupon)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Coupon added successfully')
                    e.target.reset()
                    refetch()
                }
            })

    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Coupons</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-primary-color text-white font-medium rounded shadow hover:bg-orange-600">
                    Add Coupon
                </button>
            </div>
            <table className="w-full border border-gray-300 shadow-sm bg-base-100">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 border-b text-left">Code</th>
                        <th className="py-3 px-4 border-b text-left">Discount</th>
                        <th className="py-3 px-4 border-b text-left">Description</th>
                        <th className="py-3 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon) => (
                        <tr key={coupon._id} className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b">{coupon.code}</td>
                            <td className="py-3 px-4 border-b">{coupon.discount}</td>
                            <td className="py-3 px-4 border-b">{coupon.description}</td>
                            <td className="py-3 px-4 border-b">
                                <button
                                    onClick={() => handleDeleteCoupon(coupon._id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
