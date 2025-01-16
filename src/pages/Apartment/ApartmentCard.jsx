import { CiHeart } from "react-icons/ci";
import { CiLineHeight } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
const ApartmentCard = ({ apartment }) => {
    return (
        <div className="max-w-md border rounded-2xl shadow-lg overflow-hidden bg-white ">
            {/* Image Section */}
            <div className="relative p-5 ">
                <img
                    src={apartment.image}
                    alt={`Apartment ${apartment.apartmentNo}`}
                    className="w-full h-56 object-cover rounded-xl"
                />
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full text-primary-color shadow-md cursor-pointer text-2xl">
                    <CiHeart />
                </div>
                <div className="absolute top-2 left-2  text-white bg-primary-color shadow-md cursor-pointer px-2 py-1 rounded-full">
                    <p>For Rent</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Apartment {apartment.apartmentNo} - Block {apartment.blockName}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4">
                    {apartment.description}
                </p>

                {/* Floor and Rent */}
                <div className="flex justify-between items-center mb-4">
                    <span className=" text-gray-500 mb-2  flex items-center gap-2">
                        < CiLineHeight />{apartment.floorNo} Floor
                    </span>
                    <span className=" text-gray-500 mb-2  flex items-center gap-2">
                        < IoBedOutline />0{apartment.bed} bed
                    </span>
                    <span className=" text-gray-500 mb-2  flex items-center gap-2">
                        < GiBathtub />0{apartment.bath} bath
                    </span>

                </div>
                <div className="divider"></div>
                {/* Footer */}
                <div className="flex justify-between items-center pb-2">
                    <div className="text-2xl font-bold text-gray-800">
                        ${apartment.rent}
                    </div>
                    <button
                        className="btn  rounded-full flex items-center bg-primary-color text-white hover:bg-black duration-300"
                    >
                        Agreement<GoArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;
