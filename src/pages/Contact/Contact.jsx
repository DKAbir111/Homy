import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
    return (
        <div className="min-h-screen pt-[75px]">
            <div className="w-full px-6 pt-20 bg-white text-center">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-6">
                    Questions? Feel Free to Reach Out Via Message.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-20">
                    {/* Email Contact */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-black p-4 rounded-full">
                            <FaEnvelope className="text-white text-2xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-700 font-medium">We’re always happy to help.</p>
                            <p className="text-gray-500 break-all">darunkaras28111@gmail.com</p>
                        </div>
                    </div>

                    {/* Hotline Contact */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-black p-4 rounded-full">
                            <FaPhone className="text-white text-2xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-700 font-medium">Our hotline number</p>
                            <p className="text-gray-500">+8801994494143</p>
                        </div>
                    </div>

                    {/* Live Chat Contact */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-black p-4 rounded-full">
                            <FaComments className="text-white text-2xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-700 font-medium">Live chat</p>
                            <p className="text-gray-500 break-all">www.homylivechat.com</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* second portion */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen p-6 bg-design-color gap-10 mt-20">
                {/* Left Side - Google Map */}
                <div className="w-full lg:w-1/2 h-[555px] overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.1528730648045!2d90.3842533!3d23.8103312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c779c16b630f%3A0x40847df0c3df5687!2sDhaka!5e0!3m2!1sen!2sbd!4v1646578890725!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        title="Dhaka Map"
                    ></iframe>

                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full lg:w-1/2 p-6 ">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Message</h2>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault()
                        toast.success("Message sent successfully")
                        document.getElementById("contactForm").reset()
                    }}>
                        <div>
                            <label className="label text-gray-700 font-semibold">Name*</label>
                            <input
                                type="text"
                                placeholder="Your Name*"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label text-gray-700 font-semibold">Email*</label>
                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label text-gray-700 font-semibold">Your Message*</label>
                            <textarea
                                placeholder="Your message*"
                                className="textarea textarea-bordered w-full h-32"
                                required
                            ></textarea>
                        </div>
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white w-full">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
