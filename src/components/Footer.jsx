import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-10 shadow-md border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
                
                {/* Left Section - Company Info */}
                <div className="md:w-1/4">
                    <img src={assets.paytech} alt="Logo" className="w-25 mb-4" />
                    <p className="text-gray-700 text-sm leading-6">
                        We provide the best services with a team of experienced professionals. Get in touch with us for more details.
                    </p>
                </div>

                {/* Center Section - Quick Links (Center-aligned) */}
                <div className="md:w-1/3 text-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">COMPANY</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">About Us</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Services</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Contact</li>
                    </ul>
                </div>

                {/* Right Section - Contact Info (Aligned to Right) */}
                <div className="md:w-1/3 text-right">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">GET IN TOUCH</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li className="hover:text-gray-900 transition">📞 +0-000-000-000</li>
                        <li className="hover:text-gray-900 transition">✉️ support@example.com</li>
                        <li className="hover:text-gray-900 transition">📍 KMC LU, Lucknow, India</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10 text-gray-500 text-sm">
                <hr className="border-gray-300 my-4"/>
                <p>© 2025 Company Name - All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
