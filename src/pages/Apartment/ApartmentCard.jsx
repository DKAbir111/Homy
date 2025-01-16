import { CiHeart } from "react-icons/ci";
import { CiLineHeight } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import Swal from "sweetalert2";
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ApartmentCard = ({ apartment }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    //handle agreement function
    const handleAgreement = (apartment) => {
        if (!user?.email) {
            Swal.fire({
                title: "Login Required",
                text: "Would you like to log in now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth/login');

                }
            });
        }


        const agreementInfo = {
            name: user?.name,
            email: user?.email,
            apartmentNo: apartment.apartmentNo,
            rent: apartment.rent,
            blockName: apartment.blockName,
            floorNo: apartment.floorNo,
            apartmentId: apartment._id,
            status: "pending"
        }
        //confirm agreement
        if (user?.email) {
            Swal.fire({
                title: "Confirm Agreement",
                text: "Are you sure you want to proceed with the agreement?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Proceed Agreement",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.post('/agreement', agreementInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: "Agreement Submitted",
                                    text: "Your request for the rental agreement has been successfully submitted.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                            Swal.fire({
                                title: "Error",
                                text: "An error occurred while submitting the agreement.",
                                icon: "error"
                            });
                        })
                }
            });

        }

    }
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
                        onClick={() => handleAgreement(apartment)}
                        className="btn  rounded-full flex items-center bg-primary-color text-white hover:bg-black duration-300"
                    >
                        Agreement<GoArrowUpRight />
                    </button>
                </div>
            </div>
            {/* TODO: Apply pagination here */}
        </div>

    );
};

export default ApartmentCard;
