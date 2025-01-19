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
                    <img src={logo} alt="Blog Logo" className="w-1/2" />
                    <p className="mt-2 text-sm">
                        Explore insightful articles, expert opinions, and the latest trends in technology, design, and personal growth.
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

                {/* Explore Topics */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Explore Topics</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Tech Innovations
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Coding Tips
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Design Trends
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Lifestyle Insights
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Featured Sections */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Must-Read</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Top Programming Guides
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Design Mastery
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Productivity Hacks
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm mb-2">
                        Subscribe to our newsletter for the latest updates and expert insights.
                    </p>
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
                        <a href="https://www.facebook.com/darulkararabir/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                    <p className="text-sm mt-2">
                        Connect with us to stay inspired and informed.
                    </p>
                </div>

                {/* Write for Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Write for Us</h3>
                    <p className="text-sm">
                        Have valuable insights to share? Join our team of contributors.
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block text-[#b28b51] hover:underline font-medium text-sm"
                    >
                        Become a Writer
                    </a>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
                    <p className="text-sm mb-4">
                        Get weekly updates on trending topics and expert articles.
                    </p>
                    <div className="flex md:flex-col lg:flex-row lg:flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 rounded-l-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#b28b51]"
                        />
                        <button className="bg-[#888888] px-4 py-2 lg:rounded-r-sm hover:bg-[#b28b51]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-design-color py-4 text-center text-sm text-black">
                &copy; 2024 Your Blog Website. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
