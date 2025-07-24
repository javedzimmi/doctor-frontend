import React, { useContext, useState } from "react";

import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import from react-router-dom
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {token ,setToken,userData}= useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout= ()=>{
    setToken(false)
    localStorage.removeItem('token')
  }


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={() => navigate(`/`)} className="w-44 cursor-pointer" src={assets.logo} alt="Admin Logo" />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">CONTACT</li>
        </NavLink>
        <Link
          to="https://doctor-admin-weld.vercel.app/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border border-blue-500 rounded-full"
              : "text-black border border-gray-500 rounded-full"
          }
        >
          <li  className="py-1 px-4 ">Admin Panel</li>
        </Link>

      </ul>

      <div className="flex items-center gap-4">

        {

          token && userData
            ? <div className="flex item-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer ">My Profile</p>
                  <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer ">My Appointment</p>
                  <p onClick={logout} className="hover:text-black cursor-pointer ">Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate("/login")} className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block ">Create Account</button>
        }

        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />

        <div className={`${showMenu ? 'fixed w-full ' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`} >
          <div className="flex items-center justify-between px-5 py-6 ">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
            <NavLink className="px-4 py-2 rounded  inline-block" onClick={() => setShowMenu(false)} to="/">HOME</NavLink>
            <NavLink className="px-4 py-2 rounded  inline-block" onClick={() => setShowMenu(false)} to="/doctors">ALL DOCTORS</NavLink>

            <NavLink className="px-4 py-2 rounded  inline-block" onClick={() => setShowMenu(false)} to="/about">ABOUT</NavLink>
            <NavLink className="px-4 py-2 rounded  inline-block" onClick={() => setShowMenu(false)} to="/contact">CONTACT</NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
