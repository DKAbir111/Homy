import { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";
import axios from "axios";

export default function Apartment() {
    const [apartments, setApartments] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5001/api/apartment')
            .then(res => setApartments(res.data))
    }, [])
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 bg-design-color">

            {/* TODO:SEARCH FUNCTIONALITY */}
            {
                apartments.map(apartment => <ApartmentCard key={apartment._id} apartment={apartment} />)
            }

        </div>
    )
}
