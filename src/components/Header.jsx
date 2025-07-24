import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate(); // For navigation

    // Smooth scroll function
    const handleScrollToSpeciality = () => {
        const specialitySection = document.getElementById("speciality");
        specialitySection?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between px-14 py-16 bg-gradient-to-br from-blue-900 via-gray-900 to-black rounded-3xl shadow-2xl border border-gray-700">
            {/* Left Side - Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl font-extrabold text-white leading-tight tracking-wide">
                    Find & Book <br />
                    <span className="text-yellow-400">Elite Doctors</span> Near You
                </h1>

                <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    Get access to the most experienced and highly-rated doctors in your area. **Personalized care, zero hassle.**
                </p>

                <div className="flex justify-left">
                    <button
                        onClick={handleScrollToSpeciality} // Trigger smooth scroll
                        className="mt-8 flex items-center gap-3 bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
                    >
                        Book Appointment
                        <img className="w-6" src={assets.arrow_icon} alt="Arrow Icon" />
                    </button>
                </div>
            </div>

            {/* Right Side - Premium Card Layout */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex items-center justify-center relative">
                {/* Doctor Image */}
                <img
                    className="w-100 drop-shadow-2xl rounded-2xl border-4 border-yellow-400 transform hover:scale-105 transition-all duration-300"
                    src={assets.header_img}
                    alt="Doctors"
                />

                {/* Floating Glass Card - Verified Doctors */}
                <div className="absolute bottom-[-30px] left-[-10px] backdrop-blur-md bg-white/20 border border-gray-500 p-5 rounded-2xl shadow-lg flex items-center gap-4 z-10 transition-transform duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-xl">
                    <img className="w-16 h-14 rounded-full border-yellow-400" src={assets.group_profiles} alt="Profiles" />
                    <div>
                        <p className="text-blue-1000 font-semibold text-lg mt-0">100+ Verified Doctors</p>
                        <p className="text-yellow-800 text-sm">Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
