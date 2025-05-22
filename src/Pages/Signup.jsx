/**
 * Signup Component - New User Registration Interface
 * Handles user account creation with comprehensive form
 * Includes validation and agency type selection
 * @returns {JSX.Element} Registration form with multiple fields
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
/**
 * Custom Input Component
 * Reusable form input with floating label and error state
 * @param {Object} props - Component properties
 * @returns {JSX.Element} Styled input field with required indicator
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
      className={`peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border rounded-md appearance-none focus:outline-none focus:ring-[0.5px] 
        ${
          showError
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"
        }`}
    />
    <label
      htmlFor={id}
      className={`absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] 
        ${showError ? "text-red-500" : "text-[#6C25FF]"}`}
    >
      {placeholder}
      <span className="ml-0.5 text-red-500">*</span>
    </label>
  </div>
);

const Signup = () => {
  // Navigation hook for redirect after signup
  const navigate = useNavigate();
  
  // Track form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Comprehensive form state management
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes", // Default value for radio selection
  });

  // Input field change handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Radio button change handler for agency selection
  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));
  };

  // Form submission handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      console.log('Please fill all required fields');
      return;
    }

    console.log('Form submitted:', formData);
    navigate('/profile');
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[640px] border border-gray-200 relative overflow-hidden">
      <BackButton />
      <Navbar />
      {/* Added mt-16 to push content down */}
      <div className="px-5 h-[calc(100%-4rem)] mt-16 overflow-y-auto">
        <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
          Create your <br /> PopX account
        </h1>
        
        {/* Connect form with onSubmit handler */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Form fields section */}
          <Input
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            showError={isSubmitted && !formData.name.trim()}
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            showError={isSubmitted && !formData.phone.trim()}
          />
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
          <Input
            id="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
            showError={isSubmitted && !formData.company.trim()}
          />

          {/* Radio Group */}
          <div>
            <span className="text-[13px] leading-[17px] text-[#1D2226]">
              Are you an Agency?<span className="text-red-500 ml-1">*</span>
            </span>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleRadioChange}
                  className="accent-[#6C25FF] size-4 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleRadioChange}
                  className="accent-[#6C25FF] cursor-pointer size-4"
                />
                No
              </label>
            </div>
          </div>

          {/* Move button inside form and change to type="submit" */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#F7F8F9]">
            <button
              type="submit"
              className="w-full bg-[#6C25FF] text-white rounded-md py-3 font-medium"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
