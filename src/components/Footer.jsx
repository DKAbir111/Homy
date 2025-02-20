import qr from '../assets/qr.png';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-white font-lato">
            {/* Top Section */}
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <img src={logo} alt="Homy Logo" className="w-1/2" />
                    <p className="mt-2 text-sm">
                        Homy simplifies property management by providing house owners with tools to oversee tenants, rent payments, and maintenance requests effortlessly.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Tenant Management</a></li>
                        <li><a href="#" className="hover:underline">Rent Collection</a></li>
                        <li><a href="#" className="hover:underline">Maintenance Requests</a></li>
                        <li><a href="#" className="hover:underline">Property Listings</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Landlord Guide</a></li>
                        <li><a href="#" className="hover:underline">Tenant Rights</a></li>
                        <li><a href="#" className="hover:underline">Property Management Tips</a></li>
                    </ul>
                </div>

                {/* Get the App */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get the App</h3>
                    <p className="text-sm mb-2">Manage your properties anytime, anywhere.</p>
                    <div className="flex items-center space-x-3">
                        <img src={qr} alt="QR Code" className="w-20" />
                        <a href="#" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="w-32"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="text-xl flex gap-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                    </div>
                    <p className="text-sm mt-2">Stay connected for the latest updates.</p>
                </div>

                {/* List Your Property */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">List Your Property</h3>
                    <p className="text-sm">Reach potential tenants by listing your property on Homy.</p>
                    <a href="#" className="mt-2 inline-block hover:underline font-medium text-sm">Get Started</a>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Updates</h3>
                    <p className="text-sm mb-4">Get insights, tips, and industry updates straight to your inbox.</p>
                    <div className="flex md:flex-col lg:flex-row lg:flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 rounded-l-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#b28b51]"
                        />
                        <button className="bg-[#888888] px-4 py-2 lg:rounded-r-sm hover:bg-primary-color">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-design-color py-4 text-center text-sm text-black">
                &copy; 2025 Homy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;