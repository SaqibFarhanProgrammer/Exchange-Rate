import React, { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaSignOutAlt,
  FaCog,
  FaGoogle,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import CompactAuthBox from "../Auth/Login";

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthBox(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCloseAuthBox = () => {
    setShowAuthBox(false);
  };

  return (
    <div className="h-screen bg-[#f4f6fc] font-sans w-full">
      {isLoggedIn ? (
        /* PROFILE PAGE */
        <>
          <div className="bg-gradient-to-r from-[#6b4eff] to-[#2d9cdb] text-white py-6 px-10 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Crypto Profile</h1>
              <div className="flex items-center gap-4">
                <button className="hover:text-zinc-100">
                  <FaCog className="text-lg" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-white text-[#0040ff] px-4 py-2 rounded-xl text-sm hover:bg-opacity-90 transition font-semibold"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white shadow px-10 py-4 flex gap-6 text-sm font-medium text-[#444]">
            <button className="text-[#0040ff] border-b-2 border-[#0040ff] pb-1">
              Overview
            </button>
          </div>

          {/* Profile Card */}
          <div className="w-[100%] mx-auto h-screen bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Avatar + Name */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#0040ff] to-[#00aaff] flex items-center justify-center shadow-lg">
                <FaUserCircle className="text-white text-6xl" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                Saqib Khan
              </h2>
              <p className="text-sm text-zinc-500">Crypto Enthusiast</p>
            </div>

            {/* Right: Profile Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="text-xs text-zinc-500">Full Name</label>
                <div className="bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a] font-medium">
                  Saqib Khan
                </div>
              </div>
              <div>
                <label className="text-xs text-zinc-500">Email</label>
                <div className="flex items-center bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a] font-medium">
                  <FaEnvelope className="mr-2 text-[#0040ff]" />
                  saqib@example.com
                </div>
              </div>
              <div>
                <label className="text-xs text-zinc-500">About Me</label>
                <div className="bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a]">
                  Blockchain enthusiast, exploring Web3, DeFi, and crypto
                  trading opportunities.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ENHANCED LOGIN SECTION */
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
            {/* Welcome Header with Animation */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">
                Welcome to CryptoHub
              </h2>
            </div>

            {/* Login Button Section */}
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <button
                  onClick={() => setShowAuthBox(true)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  <FaUserCircle className="text-xl" />
                  <span className="text-lg">Get Started - It's Free</span>
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center"></div>
              </div>
            </div>
          </div>

          {/* Auth Box - conditionally rendered */}
          {showAuthBox && (
            <CompactAuthBox
              onClose={handleCloseAuthBox}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
