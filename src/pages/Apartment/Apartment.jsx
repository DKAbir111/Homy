import { useEffect, useState, useCallback } from "react";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Apartment() {
    const [apartments, setApartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;
    const axiosPublic = useAxiosPublic();

    const fetchApartments = useCallback(async (page) => {
        try {
            const response = await axiosPublic.get(`/apartments?page=${page}&limit=${itemsPerPage}`);
            setApartments(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching apartments:", error);
        }
    }, [axiosPublic, itemsPerPage]);

    useEffect(() => {
        fetchApartments(currentPage);
    }, [fetchApartments, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-8 bg-design-color">
            {/* Apartment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {apartments.map((apartment) => (
                    <ApartmentCard key={apartment._id} apartment={apartment} />
                ))}
            </div>

            {/* Pagination Buttons */}
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
        </div>
    );
}
