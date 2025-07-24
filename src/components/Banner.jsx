import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-400 px-6 overflow-hidden rounded-lg shadow-xl">
      
      {/* Floating Gradient Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl opacity-20"></div>

      {/* Container */}
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto text-white">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-5xl font-extrabold leading-tight">
            Schedule Your <span className="text-yellow-300">Doctor's Appointment</span> <br />
            with <span className="text-green-300">100+ Verified Experts</span>
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Connect instantly with trusted doctors for a seamless healthcare experience.
          </p>
          <button onClick={()=>{navigate(`/login`);scrollTo(0,0)}} className="mt-6 px-6 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side - Info Card */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center max-w-sm border border-white/30 transform hover:scale-105 transition duration-500">
            <img
              src={assets.appointment_img}
              alt="Doctor Consultation"
              className="w-44 mx-auto drop-shadow-lg"
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Easy Online Booking
            </h2>
            <p className="text-white/80 mt-2">
              Book your doctor’s appointment within seconds.
            </p>
            <button onClick={()=>navigate(`/doctors`)} className="mt-4 px-5 py-2 bg-green-400 text-blue-900 rounded-full hover:bg-green-500 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
