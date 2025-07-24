import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilteredDocs(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilteredDocs(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Browse Through the Doctors Specialist</h2>

        {/* Speciality Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((specialty) => (
            <button
              key={specialty}
              onClick={() =>
                speciality === specialty ? navigate(`/doctors`) : navigate(`/doctors/${specialty}`)
              }
              className={`w-auto px-6 py-2 border border-gray-300 bg-blue-200 rounded-lg text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDocs.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Availability Badge */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Available
                </span>
              </div>

              {/* Doctor Image */}
              <div className="relative mb-4">
                <img
                  className="w-32 h-32 object-cover rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 mx-auto"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-full"></div>
              </div>

              {/* Doctor Info */}
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
