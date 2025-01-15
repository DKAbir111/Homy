import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import PrimaryButton from "../../components/PrimaryButton";

export default function Location() {
    const dhakaCoordinates = [23.8103, 90.4125]; // Dhaka coordinates
    const markerStyle = {
        width: 50,
        height: 50,
        backgroundColor: "#4CAF50",
        borderRadius: "50%",
        border: "3px solid white",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div className="relative bg-gradient-to-t from-design-color to-white py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Info Panel */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold text-primary-color">
                            Visit Our Location
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are located in the heart of Dhaka, making it easy for you to
                            visit us. Whether you&apos;re traveling from nearby or afar, we ensure
                            an accessible and comfortable experience.
                        </p>
                        <p className="text-gray-500 italic">
                            “Making connections from everywhere.”
                        </p>
                        <PrimaryButton text={'Get Directions'}></PrimaryButton>
                    </div>

                    {/* Map */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <Map
                            height={400}
                            defaultCenter={dhakaCoordinates}
                            defaultZoom={12}
                            className="w-full"
                        >
                            <Marker
                                anchor={dhakaCoordinates}
                                width={50}
                                style={markerStyle}
                            />
                            <Overlay anchor={dhakaCoordinates}>
                                <div className="bg-white p-3 rounded-lg shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-700">
                                        Our Building Location
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        We are located at the heart of Dhaka, easily accessible from all parts of the city.
                                    </p>
                                </div>
                            </Overlay>
                            <ZoomControl />
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    );
}
