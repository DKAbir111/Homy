import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MakeAnnouncement = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const newAnnouncement = {
            title,
            description,
            createdAt: new Date(),
            photo: user.photoURL,
            name: user.displayName
        }
        axiosSecure.post('/announcement', newAnnouncement)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('New announcement added successfully')
                    e.target.reset()
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className="min-h-screen p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Make an Announcement
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title Input */}
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                            Announcement Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter the announcement title"
                            className="mt-2 w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-color focus:outline-none"
                            required
                        />
                    </div>

                    {/* Description Input */}
                    <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Write the announcement details here..."
                            rows="5"
                            className="mt-2 w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-primary-color  focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="reset"
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-primary-color text-white rounded-lg hover:bg-orange-500 focus:outline-none"
                        >
                            Publish Announcement
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAnnouncement;
