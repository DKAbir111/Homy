import aboutImg from '../../assets/file.png';
import happy from '../../assets/happy.webp';
import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import PrimaryButton from '../../components/PrimaryButton';

export default function About() {
    return (
        <section className="max-w-screen-2xl flex gap-5 min-h-screen p-4 flex-col lg:flex-row">
            {/* Left Side */}
            <div className="lg:w-7/12 bg-[#fbddd1] rounded-xl relative overflow-hidden">
                <h1 className='font-semibold text-6xl md:px-10 py-20 leading-tight'>
                    Secure your family&apos;s dream home.
                </h1>

                {/* Experience */}
                <div className='bg-white w-56 p-5 rounded-xl absolute right-10 top-56 shadow-lg'>
                    <h2 className='font-semibold text-6xl text-center text-primary-color'>07+</h2>
                    <p className='text-lg text-center text-gray-500'>Years Experience
                        with proud.</p>
                </div>

                {/* Background Image */}
                <img src={aboutImg} alt="Modern home" className='object-cover w-full h-full opacity-70' />

                {/* Video Play Button */}
                <span className='absolute top-1/2 left-10 transform -translate-y-1/2'>
                    <FaCirclePlay className='text-6xl text-primary-color cursor-pointer hover:scale-110 transition-transform' />
                </span>

                {/* Happy Clients */}
                <img src={happy} alt="Happy clients" className='absolute bottom-10 left-10' />
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-design-color p-10 rounded-xl">
                <div className='bg-white w-full h-full rounded-xl p-10 space-y-6 shadow-md flex flex-col justify-center gap-5'>
                    <h3 className='text-4xl font-semibold text-gray-800'>About Us</h3>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                        We are committed to helping families secure their dream homes with ease. Our team
                        specializes in providing personalized real estate solutions, ensuring a seamless and
                        trustworthy experience for all our clients. Whether it’s buying, selling, or managing
                        properties, we stand by your side every step of the way.
                    </p>

                    {/* Stats Section */}
                    <div className='flex justify-between border-y-2 border-gray-300 py-6 flex-col md:flex-row'>
                        <div className='text-center'>
                            <h2 className='font-semibold text-5xl text-primary-color'>500+</h2>
                            <p className='text-lg text-gray-500'>Happy Clients</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-semibold text-5xl text-primary-color'>120+</h2>
                            <p className='text-lg text-gray-500'>Properties Managed</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-semibold text-5xl text-primary-color'>15+</h2>
                            <p className='text-lg text-gray-500'>Awards Won</p>
                        </div>
                    </div>

                    {/* Vision and Mission */}
                    <div className='space-y-4'>
                        <h4 className='text-2xl font-semibold text-gray-700'>Our Vision</h4>
                        <p className='text-lg text-gray-600'>
                            To redefine the real estate experience with innovative solutions and unparalleled service.
                        </p>

                        <h4 className='text-2xl font-semibold text-gray-700'>Our Mission</h4>
                        <p className='text-lg text-gray-600'>
                            To empower families to achieve their homeownership dreams by providing expert guidance
                            and a trustworthy partnership.
                        </p>

                        <ul>
                            <li className='flex items-center gap-2 text-lg text-gray-600'><MdOutlineDone /> Loan & low Interest facility</li>
                            <li className='flex items-center gap-2 text-lg text-gray-600'> <MdOutlineDone /> Over 100k+ property & update regularly</li>
                            <li className='flex items-center gap-2 text-lg text-gray-600'><MdOutlineDone /> Expert agent consultation</li>
                        </ul>
                    </div>
                    {/* button */}
                    <div className='flex justify-between items-center'>
                        <PrimaryButton text="More Details" />
                        <span className='flex items-center text-lg font-semibold hover:text-primary-color cursor-pointer hover:underline duration-300'>Request a Call Back <FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
