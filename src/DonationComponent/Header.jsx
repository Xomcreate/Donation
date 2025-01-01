import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDonateHeart } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-[10vh] w-full grid grid-cols-12 text-white bg-blue-500 items-center px-4">
        {/* Left section */}
        <div className="col-span-8 md:col-span-4 flex items-center">
          <BiDonateHeart className="text-[30px] md:text-[40px] font-bold mr-2 text-[orangered]" />
          <p className="font-bold font-serif text-[20px] md:text-[25px]">SupportNet</p>
        </div>
        
        {/* Middle navigation section */}
        <div className="hidden md:col-span-6 md:flex text-[15px] items-center justify-around">
          <li className="list-none">
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li className="list-none">
            <Link to="About" className="hover:underline">About us</Link>
          </li>
          <li className="list-none">
            <Link to="Blog" className="hover:underline">Blog</Link>
          </li>
          <li className="list-none ">
            <Link to="Donate" className="hover:underline flex flex-row gap-[5px] font-semibold bg-[orangered] h-[6vh] justify-center items-center rounded-lg  w-[6vw] "><FaRegHeart />Donate</Link>
          </li>
          <li className="list-none">
            <Link to="Contact" className="hover:underline">Contacts</Link>
          </li>
        </div>

        {/* Right section */}
        <div className="hidden md:col-span-2 md:flex justify-end gap-4">
          <button className="bg-[orangered] text-base rounded-lg w-[100px] h-[40px]">
            Sign-up
          </button>
          <button className="bg-[orangered] text-base rounded-lg w-[100px] h-[40px]">
            Sign-in
          </button>
        </div>

        {/* Hamburger menu button for small screens */}
        <div className="col-span-4 md:hidden flex justify-end">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Hamburger menu */}
      {isMenuOpen && (
        <div className="bg-blue-600 text-white flex flex-col items-center py-4 md:hidden">
          <Link to="/" onClick={toggleMenu} className="py-2 hover:underline">
            Home
          </Link>
          <Link to="About" onClick={toggleMenu} className="py-2 hover:underline">
            About us
          </Link>
          <Link to="Blog" onClick={toggleMenu} className="py-2 hover:underline">
            Blog
          </Link>
          <Link to="Donate" onClick={toggleMenu} className="py-2  flex flex-row gap-[5px] font-semibold bg-[orangered]  justify-center rounded-lg items-center h-[5vh] w-[12vw] hover:underline">
          <FaRegHeart /> Donate
          </Link>
          <Link to="Contact" onClick={toggleMenu} className="py-2 hover:underline">
            Contacts
          </Link>
          <div className="mt-4 flex gap-4">
            <button className="bg-[orangered] text-sm rounded-lg px-4 py-2">
              Sign-up
            </button>
            <button className="bg-[orangered] text-sm rounded-lg px-4 py-2">
              Sign-in
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
