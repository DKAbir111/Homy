
import banner from '../../assets/banner.svg';
export default function Banner() {
    return (
        <section className="bg-design-color min-h-screen flex justify-center items-center flex-col gap-10" style={{
            backgroundImage: `url(${banner})`,
        }}>
            <div className='max-w-screen-lg mx-auto text-center space-y-5'>
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-semibold'>Get the ideal home for your family</h2>
                <p className='text-2xl'>We’ve more than 745,000 apartments, place & plot.</p>
            </div>
            <div className='w-10/12 mx-auto p-7 bg-white grid grid-cols-3 rounded-lg'>
                <div className='flex-col items-center'>
                    <p className='text-gray-500 font-thin'>Are you looking for...</p>
                    <h3 className='text-lg font-semibold'>Rent Apartment</h3>
                </div>
                <div className='border-x flex flex-col items-center'>
                    <p className='text-gray-500 font-thin'>Are you looking for...</p>
                    <h3 className='text-lg font-semibold'>Rent Apartment</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-gray-500 font-thin'>Are you looking for...</p>
                    <h3 className='text-lg font-semibold'>Rent Apartment</h3>
                </div>
            </div>
        </section>
    )
} 
