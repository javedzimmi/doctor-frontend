import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoc from '../components/RelatedDoc';
import { toast } from 'react-toastify';
import axios from 'axios';



const Appointment = () => {
  const { docId } = useParams();
  const { doctors, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const navigate = useNavigate();


  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const [selectedTime, setSelectedTime] = useState('');


  const [bookingSuccess, setBookingSuccess] = useState(false);

  const getAvailableSlots = async () => {
    if (!docInfo || !docInfo.slots_booked) return;

    setDocSlots([]);
    let today = new Date();
    let slotsArray = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;

        const isSlotAvailable = !docInfo.slots_booked[slotDate]?.includes(slotTime);

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slotsArray.push({ date: new Date(today.getTime() + i * 86400000), timeSlots });
    }

    setDocSlots(slotsArray);
  };



  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book  appointment")
      return navigate("/login")
    }

    try {

      const date = docSlots[selectedDateIndex].date;

      let day = date.getDate();
      let month = date.getMonth() + 1;

      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime: selectedTime }, { headers: { token } })
      if (data.success) {
        toast.success(data.message);
        getDoctorsData()
        navigate("/my-appointments")
      } else {
        toast.error(data.message)
      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)


    }
  }



  useEffect(() => {
    const selectedDoctor = doctors.find(doc => doc._id === docId);
    setDocInfo(selectedDoctor);
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  // const handleBooking = () => {
  //   if (selectedTime) {
  //     setBookingSuccess(true);
  //     setTimeout(() => setBookingSuccess(false), 3000); // Hide success message after 3 sec
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {docInfo ? (
        <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-lg relative mt-8">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-t-lg"></div>

          {/* Doctor Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <img src={docInfo.image} alt={docInfo.name} className="w-full h-full object-cover rounded-lg shadow-md border border-blue-300" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">{docInfo.name}</h2>
                <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-4">
                <p className="text-gray-700 text-sm">{docInfo.degree}</p>
                <button className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full shadow-sm">
                  {docInfo.experience}
                </button>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                  About <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{docInfo.about}</p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <span className="text-gray-700 text-md font-medium">Appointment Fees:</span>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
                  ${docInfo.fees}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center w-full mt-12">Loading doctor details...</p>
      )}

      {/* Booking Slots Section */}
      <div className="w-full max-w-5xl mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800">Book an Appointment</h2>

        {/* Date Selector */}
        <div className="flex overflow-x-auto space-x-2 py-3">
          {docSlots.length > 0 &&
            docSlots.map((slot, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium ${selectedDateIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
                  }`}
                onClick={() => setSelectedDateIndex(index)}
              >
                {daysOfWeek[slot.date.getDay()]} <br /> {slot.date.getDate()}
              </button>
            ))}
        </div>

        {/* Time Slots Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
          {docSlots.length > 0 &&
            docSlots[selectedDateIndex]?.timeSlots.map((timeSlot, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${selectedTime === timeSlot.time
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
                  }`}
                onClick={() => setSelectedTime(timeSlot.time)}
              >
                {timeSlot.time}
              </button>
            ))}
        </div>

        {/* Selected Slot Display */}
        {selectedTime && (
          <p className="mt-4 text-blue-600 font-medium">
            Selected Slot: {daysOfWeek[docSlots[selectedDateIndex].date.getDay()]},{' '}
            {docSlots[selectedDateIndex].date.getDate()} - {selectedTime}
          </p>
        )}

        {/* Book Appointment Button */}
        <button

          className={`mt-6 px-6 py-3 rounded-md text-white font-semibold ${selectedTime ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          disabled={!selectedTime}
          onClick={bookAppointment}
        >
          Book Appointment
        </button>

        {/* Success Message */}
        {bookingSuccess && (
          <p className="mt-4 text-green-600 font-medium">Appointment successfully booked! ✅</p>
        )}
      </div>
      {docInfo && <RelatedDoc docId={docId} speciality={docInfo.speciality} />}

    </div>
  );
};

export default Appointment;
