import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-all duration-200"
      >
        <div className="w-6 h-5 flex flex-col justify-between relative">
          <span 
            className={`h-0.5 w-full bg-[#6C25FF] rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span 
            className={`h-0.5 w-full bg-[#6C25FF] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`h-0.5 w-full bg-[#6C25FF] rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Dropdown Menu - Aligned to right */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-xl py-2 transform transition-all duration-200 ease-in-out">
          <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#6C25FF] hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#6C25FF] hover:text-white transition-colors duration-200">
            Profile
          </Link>
          <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#6C25FF] hover:text-white transition-colors duration-200">
            Sign In
          </Link>
          <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#6C25FF] hover:text-white transition-colors duration-200">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;