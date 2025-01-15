import aboutImg from '../../assets/file.png'
import happy from '../../assets/happy.webp'
import { FaCirclePlay } from "react-icons/fa6";
export default function About() {
    return (
        <section className="max-w-screen-2xl flex gap-5 min-h-screen p-4">
            <div className="w-7/12 bg-[#fbddd1] rounded-xl relative">
                <h1 className='font-semibold text-6xl px-10 py-20'>
                    Secure your family&apos;s dream home.
                </h1>
                <div className='bg-white w-56 p-5 rounded-xl absolute right-10'>
                    <h2 className='font-semibold text-6xl text-center'>07+</h2>
                    <p className='text-lg text-center text-gray-500'>Years Experience
                        with proud.</p>
                </div>

                {/* backgroundImage */}
                <img src={aboutImg} alt="" className='object-cover  w-full' />
                {/* video button */}
                <span className='absolute top-72 left-10'> <FaCirclePlay className='text-6xl' /></span>
                <img src={happy} alt="" className='absolute bottom-10 left-10' />
            </div>
            <div className="flex-1 bg-design-color  p-10">
                <div className='bg-white w-full h-full rounded-xl p-10'>
                    <h3 className='text-4xl font-semibold'>Who we are?</h3>
                    <p className='text-lg text-gray-500'>Your premier partner in real estate.
                        Transforming properties into dreams. Let us guide you home with expertise.</p>

                    <div className='bg-white  p-5 flex justify-between'>
                        <div>
                            <h2 className='font-semibold text-6xl text-center'>07+</h2>
                            <p className='text-lg text-center text-gray-500'>Years Experience
                            </p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-6xl text-center'>07+</h2>
                            <p className='text-lg text-center text-gray-500'>Years Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
