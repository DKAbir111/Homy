import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.svg';


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-design-color text-center px-4" style={{ backgroundImage: `url(${banner})` }}>
            <h1 className="text-4xl md:text-6xl font-bold text-black">
                Oops! It looks like you&apos;re lost.
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                The page you&apos;re looking for isn&apos;t available. Try to search again or go back to the homepage.
            </p>
            <button
                className="mt-6 px-6 py-3 text-white bg-black hover:bg-primary-color transition rounded-full"
                onClick={() => {
                    navigate('/')
                }}
            >
                Back to Home
            </button>

        </div>
    );
};

export default ErrorPage;
