/**
 * Signin Component - User Authentication Interface
 * Handles user login functionality with email and password
 * Includes form validation and error handling
 * @returns {JSX.Element} Login form with validation
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Add this import
import BackButton from "../components/BackButton";

/**
 * Custom Input Component
 * Reusable form input with floating label and error state
 * @param {Object} props - Component properties
 * @returns {JSX.Element} Styled input field with label
 */
const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  showError,
}) => (
  <div className="relative w-full">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border rounded-md appearance-none focus:outline-none focus:ring-[0.5px] ${
        showError
          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
          : "border-[#CBCBCB] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
      }`}
    />
    <label
      htmlFor={id}
      className={`absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] ${
        showError ? "text-red-500" : "text-[#6C25FF]"
      }`}
    >
      {placeholder}
    </label>
  </div>
);

const Signin = () => {
  // Navigation hook for redirecting after successful login
  const navigate = useNavigate();

  // Form state management
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Track form submission state for validation display
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Form submission handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Basic form validation
    const isFormValid = formData.email.trim() && formData.password.trim();
    if (!isFormValid) return;

    console.log("Form submitted:", formData);
    navigate("/profile");
  };

  return (
    // Main container with responsive layout
    <div className="bg-[#F7F8F9] w-[375px] h-[640px] border border-gray-200 relative">
      <BackButton />
      <Navbar />
      {/* Added flex and justify-center to center content vertically */}
      <div className="h-full flex flex-col justify-center">
        <div className="px-5">
          {/* Header section */}
          <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
            Signin to your <br />
            PopX account
          </h1>

          {/* Description text */}
          <p className="text-lg text-[#1D2226] opacity-60 leading-[26px] mt-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Login form with validation */}
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            {/* Form fields */}
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              showError={isSubmitted && !formData.email.trim()}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              showError={isSubmitted && !formData.password.trim()}
            />

            <button
              type="submit"
              className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
