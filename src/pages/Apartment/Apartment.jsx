import { useEffect, useState, useCallback } from "react";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Apartment() {
    const [apartments, setApartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [minRent, setMinRent] = useState(""); // Minimum rent filter
    const [maxRent, setMaxRent] = useState(""); // Maximum rent filter
    const itemsPerPage = 6;
    const axiosPublic = useAxiosPublic();

    const fetchApartments = useCallback(async (page, min = "", max = "") => {
        try {
            const response = await axiosPublic.get(
                `/apartments?page=${page}&limit=${itemsPerPage}&minRent=${min}&maxRent=${max}`
            );
            setApartments(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching apartments:", error);
        }
    }, [axiosPublic, itemsPerPage]);

    useEffect(() => {
        fetchApartments(currentPage, minRent, maxRent);
    }, [fetchApartments, currentPage, minRent, maxRent]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = () => {
        setCurrentPage(1); // Reset to the first page for new filters
        fetchApartments(1, minRent, maxRent);
    };

    return (
        <div className="p-8 bg-design-color min-h-screen">
            {/* Search Filters */}
            <div className="mb-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                <span className="flex justify-center items-center gap-4">
                    <input
                        type="number"
                        value={minRent}
                        onChange={(e) => setMinRent(e.target.value)}
                        placeholder="Min Rent"
                        className="border border-gray-300 p-2 rounded"
                    />
                    <input
                        type="number"
                        value={maxRent}
                        onChange={(e) => setMaxRent(e.target.value)}
                        placeholder="Max Rent"
                        className="border border-gray-300 p-2 rounded"
                    />
                </span>
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-primary-color text-white rounded"
                >
                    Search
                </button>
            </div>

            {/* Apartment Cards */}
            {/* Apartment Cards */}
            {apartments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {apartments.map((apartment) => (
                        <ApartmentCard key={apartment._id} apartment={apartment} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="border rounded-2xl shadow-lg overflow-hidden bg-white">
                            {/* Image Section */}
                            <div className="relative p-5">
                                <Skeleton height={224} className="w-full rounded-xl" />
                                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                                    <Skeleton circle width={32} height={32} />
                                </div>
                                <div className="absolute top-2 left-2 bg-gray-300 px-4 py-2 rounded-full">
                                    <Skeleton width={50} height={16} />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4">
                                {/* Title */}
                                <Skeleton height={24} width="80%" className="mb-2" />

                                {/* Description */}
                                <Skeleton height={16} width="100%" className="mb-2" />
                                <Skeleton height={16} width="90%" className="mb-4" />

                                {/* Floor and Rent */}
                                <div className="flex justify-between items-center mb-4">
                                    <Skeleton height={20} width="25%" />
                                    <Skeleton height={20} width="25%" />
                                    <Skeleton height={20} width="25%" />
                                </div>

                                <div className="divider"></div>

                                {/* Footer */}
                                <div className="flex justify-between items-center pb-2">
                                    <Skeleton height={20} width="30%" />
                                    <Skeleton height={20} width="40%" className="rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination Buttons */}
            {totalPages > 1 && (
                <div className="mt-4 flex justify-center items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded ${currentPage === index + 1
                                ? "bg-primary-color text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
