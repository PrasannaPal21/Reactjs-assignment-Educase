/**
 * Home Component - Landing page for the application
 * Provides navigation options for user authentication
 * @returns {JSX.Element} Landing page with signup and signin options
 */
import React from "react";
import { Link } from "react-router-dom"; // Change from 'react-router' to 'react-router-dom'
import Navbar from "../components/Navbar"; // Add this import

const Home = () => {
  return (
    // Main container with responsive layout
    <div className="bg-[#F7F8F9] w-[375px] h-[640px] border border-gray-200 relative"> {/* Added relative */}
      <Navbar />
      {/* Content wrapper with padding */}
      <div className="h-full flex flex-col justify-end">
        <div className="p-5">
          {/* Welcome section */}
          <h1 className="text-[28px] font-medium text-[#1D2226] leading-[17px]">
            Welcome to PopX
          </h1>
          <p className="text-lg text-[#1D2226] opacity-60 leading-[26px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Navigation buttons container */}
          <div className="flex flex-col gap-[10px] font-medium mt-7 mb-8">
            {/* Sign up button with primary styling */}
            <Link to="/signup">
              <button className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] w-full">
                Create Account
              </button>
            </Link>

            {/* Sign in button with secondary styling */}
            <Link to="/signin">
              <button className="bg-[#6C25FF4B] rounded-md text-[#1D2226] text-base leading-[17px] h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#6e25ff37] w-full">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
