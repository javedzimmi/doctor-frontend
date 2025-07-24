import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import MyAppoinments from './pages/MyAppoinments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import Pay from './pages/Pay'





const App = () => {
  const location = useLocation(); // Get current route

  // Define routes where Navbar & Footer should be hidden
  const hiddenRoutes = ['/admin', '/doctor', '/admin-page'];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppoinments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
         <Route path='/pay' element={<Pay/>} />
       
      </Routes>
      <Footer />
    </div>
  )
}

export default App
