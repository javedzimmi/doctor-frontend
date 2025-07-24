import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      {/* Title Section */}
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        CONTACT <span className="text-black">INDIA</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full">
          <img className="rounded-lg shadow-md" src={assets.contact_image} alt="Contact" />
        </div>

        {/* Right: Contact Info */}
        <div className="lg:w-1/2 w-full space-y-6">
          {/* Office Info */}
          <div>
            <h3 className="text-xl font-semibold">OUR OFFICE</h3>
            <p className="text-gray-600 mt-2">
            Bhitholi, lucknow, India
            </p>
            <p className="text-gray-600">Tel: +917267982505</p>
            <p className="text-gray-600">Email: javed@gmail.com</p>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-xl font-semibold">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-600 mt-2">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-4 px-6 py-2 border border-black rounded-md hover:bg-gray-100 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
