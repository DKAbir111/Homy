import { useEffect, useState, useCallback } from "react";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

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
        <div className="p-8 bg-design-color">
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
            {apartments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {apartments.map((apartment) => (
                        <ApartmentCard key={apartment._id} apartment={apartment} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 mt-8">
                    No apartments available. Try adjusting the filters.
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
