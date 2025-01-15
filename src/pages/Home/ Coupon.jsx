import PrimaryButton from "../../components/PrimaryButton";
import building from '../../assets/file.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
export default function Coupon() {

    return (
        <section className="relative bg-design-color p-10 rounded-xl bg-fixed flex flex-col md:flex-row items-center gap-6 justify-between" style={{ backgroundImage: `url(${building})` }}>
            {/* Left Section */}
            <div className="space-y-5 w-1/2">
                <h2 className="text-5xl font-bold text-gray-800">
                    Exclusive <span className="text-primary-color">Monthly Coupon</span>
                    <br />
                    for you.
                </h2>
                <p className="text-lg text-gray-600">
                    Don’t miss out on this personalized monthly exclusive offer for you.
                </p>
                <PrimaryButton text='  More Details' />
            </div>

            {/* Right Section */}
            <div className="bg-white rounded-xl shadow-xl p-6 w-full md:w-[400px] space-y-4 relative">
                {/* Tag */}
                <span className="bg-green-100 text-green-600 text-sm font-semibold py-1 px-3 rounded-full">
                    DISCOUNT
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800">Luxury fisa orkit villa.</h3>
                <p className="text-sm text-gray-500">
                    Mirpur 10, National Stadium, 1210, Dhaka, BD
                </p>
                {/* <div className="text-4xl font-bold text-gray-800 mt-2">$28,100.00</div> */}
                <div className="flex  gap-2">

                    <h2 className="bg-design-color py-2 px-7 rounded-sm border">HELLO</h2>
                    <CopyToClipboard text="HELLO">
                        <button className="text-xl" title="Copy" onClick={() => {
                            toast.success('Copy to clipboard')
                        }}><IoCopy /></button>
                    </CopyToClipboard>

                </div>
                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Details */}
                <div className="flex justify-between text-sm text-gray-600">
                    <div>
                        <span className="block font-bold text-gray-800">2137</span>
                        sqft
                    </div>
                    <div>
                        <span className="block font-bold text-gray-800">03</span>
                        bed
                    </div>
                    <div>
                        <span className="block font-bold text-gray-800">02</span>
                        bath
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-4">
                    <button className="text-orange-500 font-semibold hover:underline">
                        Check Full Details
                    </button>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full cursor-pointer hover:bg-gray-800 transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
