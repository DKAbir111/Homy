import useAuth from "../../../hooks/useAuth";


const MyProfile = () => {

    const { user } = useAuth()
    return (
        <div className="min-h-screen flex flex-col items-center py-10">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">

                {/* Profile Header */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user?.photoURL}
                        alt={` profile`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary-color shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mt-4">{user?.displayName}</h1>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>

                {/* User Details */}
                <div className="divide-y divide-gray-200">
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-1">Agreement Details</h2>
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-800">Accepted Date:</span> None
                        </p>
                    </div>

                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-1">Rented Apartment Info</h2>
                        <div className="text-gray-600 space-y-1">
                            <p>
                                <span className="font-medium text-gray-800">Floor:</span> None
                            </p>
                            <p>
                                <span className="font-medium text-gray-800">Block:</span> None
                            </p>
                            <p>
                                <span className="font-medium text-gray-800">Room No:</span> None
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
