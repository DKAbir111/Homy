import PrimaryButton from "../../components/PrimaryButton";
import building from '../../assets/file.png';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Coupon() {
    const [coupons, setCoupons] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/coupon')
            .then(res => setCoupons(res.data))
    }, [axiosPublic]);

    return (
        <section
            className="relative bg-design-color p-10 rounded-xl bg-fixed flex flex-col md:flex-row items-center gap-6 justify-between"
            style={{ backgroundImage: `url(${building})` }}
        >
            {/* Left Section */}
            <div className="space-y-5 w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    Exclusive <span className="text-primary-color">Monthly Coupons</span>
                    <br />
                    Just for You!
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                    Don’t miss out on these personalized monthly exclusive offers for you.
                </p>
                <PrimaryButton text="More Details" />
            </div>

            {/* Right Section */}
            <div className="space-y-6 w-full md:w-[400px]">
                {coupons.map((coupon) => (
                    <div
                        key={coupon._id}
                        className="bg-white rounded-xl shadow-xl p-6 space-y-4 relative"
                    >
                        {/* Tag */}
                        <span className="bg-green-100 text-green-600 text-sm font-semibold py-1 px-3 rounded-full">
                            {coupon.discount}% DISCOUNT
                        </span>

                        {/* Coupon Content */}
                        <h3 className="text-xl font-bold text-gray-800">{coupon.description}</h3>
                        <p className="text-sm text-gray-500">Use the code below to claim your discount.</p>

                        <div className="flex gap-2 items-center">
                            <h2 className="bg-design-color py-2 px-7 rounded-sm border font-semibold text-gray-800">
                                {coupon.code}
                            </h2>
                            <CopyToClipboard text={coupon.code}>
                                <button
                                    className="text-xl"
                                    title="Copy"
                                    onClick={() => {
                                        toast.success("Copied to clipboard");
                                    }}
                                >
                                    <IoCopy />
                                </button>
                            </CopyToClipboard>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Footer */}
                        <div className="text-center mt-4">
                            <button className="text-orange-500 font-semibold hover:underline">
                                Check Full Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
