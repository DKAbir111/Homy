import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function Announcement() {
    const axiosSecure = useAxiosSecure();
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        axiosSecure
            .get("/announcement") // Replace with the correct API endpoint
            .then((res) => {
                setAnnouncements(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch announcements", err);
            });
    }, [axiosSecure]);

    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                    Announcements
                </h2>
                <div className="space-y-6">
                    {announcements.map((announcement) => (
                        <div
                            key={announcement._id}
                            className="bg-white shadow-sm rounded-lg p-4"
                        >
                            <div className="flex items-center mb-3">
                                <img
                                    src={announcement.photo}
                                    alt={announcement.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {announcement.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {new Date(
                                            announcement.createdAt
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {announcement.title}
                            </h3>
                            <p className="text-gray-700">{announcement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
