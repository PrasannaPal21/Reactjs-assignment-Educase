/**
 * Profile Component - User Profile Management Interface
 * Displays user information, profile picture and account settings
 * @returns {JSX.Element} Profile page with user details and customization options
 */
import React from "react";
import pfp from "../assets/pfp.png";
import camImg from "../assets/camImg.png";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    // Main container with fixed dimensions and border
    <div className="bg-[#F7F8F9] w-[375px] h-[640px] border-2 border-gray-200 relative"> {/* Added relative */}
      <Navbar />
      {/* Header bar with account settings title */}
      <div className="bg-white h-[68px] drop-shadow shadow-[0px_3px_6px_#00000007] text-lg leading-[21px] text-[#1D2226] flex items-center pl-4">
        Account Settings
      </div>

      {/* Profile content section with padding and spacing */}
      <div className="px-5 mt-5 space-y-[30px]">
        {/* User profile section with photo and basic info */}
        <div className="flex items-start gap-5 text-[#1D2226]">
          {/* Profile picture with camImg overlay */}
          <img src={pfp} alt="pfp photo" className="relative"/>
          <img src={camImg} alt="camImg" className="absolute ml-14.5 mt-12.5"/>
          
          {/* User details container */}
          <div className="space-y-1 ">
            <p className="text-[15px] font-medium capitalize">Abcde fghij</p>
            <p className="text-sm leading-[19px]">abcde@Gmail.com</p>
          </div>
        </div>

        {/* User bio/description section */}
        <p className="text-sm leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* Bottom separator line */}
      <p className="mt-5 border border-dashed border-[#CBCBCB] space-x-4"></p>
    </div>
  );
};

export default Profile;
