import React from 'react';
import { Link } from 'react-router-dom';
import { BiDonateHeart } from "react-icons/bi";

function Header() {
  return (
    <>
      <div 
        className="h-[10vh] w-full grid grid-cols-8 text-white bg-blue-500"
      >
        {/* Left section */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="flex items-center">
            <BiDonateHeart className=" text-[40px] font-bold mr-2 text-[orangered]" />
            <p className="font-bold font-serif text-[25px]">SupportNet</p>
          </div>
        </div>
        
        {/* Middle navigation section */}
        <div className="col-span-4 flex items-center justify-around">
          <li className="list-none">
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li className="list-none">
            <Link to="About" className="hover:underline">About</Link>
          </li>
          <li className="list-none">
            <Link to="Contacts" className="hover:underline">Contacts</Link>
          </li>
        </div>
        
        {/* Right section */}
        <div className="col-span-2 bg-teal-600 flex items-center justify-center">
          <p className="font-bold">User</p>
        </div>
      </div>
    </>
  );
}

export default Header;
