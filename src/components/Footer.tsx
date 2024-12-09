import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="max-w-fit">
                    <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
                    <p className="mt-2 text-gray-600">
                        Our vision is to provide convenience and <br /> help increase your sales business.
                    </p>
                </div>
                {/* Links Section */}
                <div className="flex flex-col md:flex-row justify-around gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">About</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">How it works</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Featured</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Partnership</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Business Relation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Community</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Podcast</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Invite a friend</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Socials</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Discord</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-600">
                <div>©2024 MORENT. All rights reserved</div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
                    <a href="#" className="hover:text-gray-900">Privacy & Policy</a>
                    <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;