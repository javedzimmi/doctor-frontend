import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();

    const {doctors}=useContext(AppContext);

    return (
        <div className='py-16 px-8 bg-gradient-to-r from-blue-100 to-white'>
            <h1 className='text-3xl font-bold text-center text-gray-900'>Top Doctors to Book</h1>
            <p className='text-lg text-center text-gray-600 mt-4'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                    onClick={() =>{ navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
                        key={index}
                        className='group relative flex flex-col items-center bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300'
                    >

                        {/* Availability Badge at the Top Right */}
                        <div className='absolute top-4 right-4 flex items-center space-x-2'>
                            <p className='w-3 h-3 bg-green-500 rounded-full'></p>
                            <p className='bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                                Available
                            </p>
                        </div>

                        <div className='relative'>
                            <img
                                className='w-32 h-32 object-cover rounded-full mb-4 shadow-md group-hover:shadow-xl transition-all duration-300'
                                src={item.image}
                                alt={item.name}
                            />
                            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-300'></div>
                        </div>

                        <div className='text-center mt-4'>
                            <p className='text-lg font-semibold text-gray-800'>{item.name}</p>
                            <p className='text-sm text-gray-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-8'>
                <button onClick={()=>{navigate(`/doctors`);scrollTo(0,0)}} className='bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-all duration-300'>
                    See More Doctors
                </button>
            </div>
        </div>
    )
}

export default TopDoctors
