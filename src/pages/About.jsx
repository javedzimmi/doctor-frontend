import React from "react";
import { assets } from "../assets/assets"; // Ensure the image path is correct

const About = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
  <img
    src={assets.about_image} // Ensure correct image import
    alt="Doctors"
    className="max-w-[400px] h-auto max-h-[400px] rounded-lg shadow-lg"
  />
</div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ABOUT <span className="text-blue-600">US</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-700 mb-4">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h3 className="text-lg font-bold text-gray-800">Our Vision</h3>
          <p className="text-gray-700">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group p-6 bg-gray-100 shadow-md rounded-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">EFFICIENCY</h3>
            <p className="text-gray-600">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          {/* Card 2 */}
          <div className="group p-6 bg-gray-100 shadow-md rounded-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CONVENIENCE</h3>
            <p className="text-gray-600">Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          {/* Card 3 */}
          <div className="group p-6 bg-gray-100 shadow-md rounded-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">PERSONALIZATION</h3>
            <p className="text-gray-600">Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
