import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SignIn({ onClose }) {
  const navigate = useNavigate();

  const handleSwitchToSignUp = () => {
    if (onClose) {
      onClose(); // Close the SignIn popup
    }
    navigate("/signup"); // Navigate to the SignUp page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6 relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Welcome Back!
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Sign in to access your account.
      </p>

      {/* Form */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="mx-4 text-gray-600">OR</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Social Login */}
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
        Don’t have an account?{" "}
        <span
          onClick={handleSwitchToSignUp}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </motion.div>
  );
}

export default SignIn;
