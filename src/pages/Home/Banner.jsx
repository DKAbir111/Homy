
import banner from '../../assets/banner.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    { title: "Get the ideal home for your family", subtitle: "We’ve more than 745,000 apartments, places & plots." },
    { title: "Find your dream home with ease today", subtitle: "Explore a wide range of listings tailored to your needs." },
    { title: "Invest in property with total confidence", subtitle: "Premium plots and properties at competitive prices." }
];

export default function Banner() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <section
            className="bg-design-color min-h-screen flex justify-center items-center flex-col gap-10"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Slider Section */}
            <div className="max-w-screen-lg mx-auto text-center space-y-5">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold">{slide.title}</h2>
                            <p className="text-2xl">{slide.subtitle}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Options Section */}
            <div className="lg:w-10/12 w-11/12 mx-auto p-7 bg-white md:grid grid-cols-3 rounded-lg shadow-md space-y-5 md:space-y-0">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-600 font-thin">Looking for your home?</p>
                    <h3 className="text-lg font-semibold">Buy a Property</h3>
                </div>
                <div className="border-x flex flex-col items-center">
                    <p className="text-gray-600 font-thin">Want flexibility and ease?</p>
                    <h3 className="text-lg font-semibold">Rent a Property</h3>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 font-thin">Searching for investments?</p>
                    <h3 className="text-lg font-semibold">Find a Plot</h3>
                </div>
            </div>
        </section>
    );
}
