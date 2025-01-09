import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SignIn from "./Signin"; // Import the SignIn component

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  // Close the menu if the screen is resized to a large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Header Container */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-[10vh] w-full bg-white text-white flex items-center justify-between px-4 shadow-md"
      >
        {/* Logo Section */}
        <div className="flex items-center pl-[30px]">
          <BiDonateHeart className="text-[30px] md:text-[30px] font-bold mr-2 text-[red]" />
          <p className="font-bold text-black flex font-serif text-[20px] md:text-[20px]">
            SupportNet
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden font-semibold md:flex items-center space-x-6">
          {["Home", "About Us", "Blog", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="relative group px-4 py-2 text-black"
            >
              {item}
              <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full h-[2px] bg-[orangered] transition-all duration-300"></span>
            </Link>
          ))}
          <Link
            to="/donate"
<<<<<<< HEAD
            className="flex items-center gap-2 bg-[orangered] text-white px-4 py-2 rounded-3xl font-semibold hover:bg-[orangered]/90 hover:scale-105 transition-transform duration-300"
          >
            <FaRegHeart className=" text-white" />
=======
            className="flex items-center gap-2 bg-[orangered] text-black px-4 py-2 rounded-3xl font-semibold hover:bg-[orangered]/90 hover:scale-105 transition-transform duration-300"
          >
            <FaRegHeart className="animate-pulse text-black" />
>>>>>>> b3a4a665d83f9217b477d3a884119689168a7d1e
            Donate
          </Link>
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center pr-[30px] gap-4">
          <Link
            to="/signup"
<<<<<<< HEAD
            className=" bg-[blue] h-[40px] px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
=======
            className="bg-gradient-to-r from-green-400 to-green-600 h-[40px] px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
>>>>>>> b3a4a665d83f9217b477d3a884119689168a7d1e
          >
            Sign Up
          </Link>
          <button
            onClick={toggleSignIn}
<<<<<<< HEAD
            className=" bg-[orangered] h-[40px] px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
=======
            className="bg-gradient-to-r from-blue-400 to-blue-600 h-[40px] px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
>>>>>>> b3a4a665d83f9217b477d3a884119689168a7d1e
          >
            Sign In
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-black text-2xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-[70vw] h-full bg-white text-black flex flex-col shadow-lg"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
              <p className="font-bold font-serif text-[20px]">Menu</p>
              <button
                onClick={toggleMenu}
                className="text-black text-2xl focus:outline-none"
              >
                <FiX />
              </button>
            </div>
            <nav className="flex flex-col items-start px-6 py-4 space-y-4 border-t border-black">
              <Link
                to="/"
                onClick={toggleMenu}
                className="relative w-full py-2 px-4"
              >
                Home
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to="/aboutus"
                onClick={toggleMenu}
                className="relative w-full py-2 px-4"
              >
                About Us
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to="/blog"
                onClick={toggleMenu}
                className="relative w-full py-2 px-4"
              >
                Blog
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="relative w-full py-2 px-4"
              >
                Contact
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to="/donate"
                onClick={toggleMenu}
                className="w-full py-2 flex items-center gap-2 font-semibold bg-[orangered] justify-center rounded-2xl h-[5vh] hover:bg-[orangered]/90 transition-transform duration-300 hover:scale-105"
              >
                <FaRegHeart className="animate-pulse" />
                Donate
              </Link>
            </nav>
            <div className="mt-4 flex flex-col gap-4 px-6">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Sign Up
              </Link>
              <button
                onClick={toggleSignIn}
                className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Sign In Modal */}
      <AnimatePresence>
        {isSignInOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <SignIn onClose={toggleSignIn} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;