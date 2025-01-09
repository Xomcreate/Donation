import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";

function SignUp() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = (e) => {
    e.preventDefault();
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <div className="min-h-screen bg-[#b4b3b3] flex items-center justify-center">
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Start your journey with us today!
        </p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[blue] text-white font-semibold rounded-lg hover:bg-[orangered] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="mx-4 text-gray-600">OR</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign Up */}
        <div className="flex justify-center gap-4">
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Google
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="#"
            onClick={handleSignInClick}
            className="text-blue-500 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>

      {/* SignIn Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <SignIn onClose={closeSignIn} />
        </div>
      )}
    </div>
  );
}

export default SignUp;
