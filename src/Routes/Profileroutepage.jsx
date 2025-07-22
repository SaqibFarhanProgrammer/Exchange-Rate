import React from "react";
import { FaUserCircle, FaEnvelope, FaSignOutAlt, FaCog } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="h-screen bg-[#f4f6fc] font-sans w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6b4eff] to-[#2d9cdb] text-white py-6 px-10 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Crypto Profile</h1>
          <div className="flex items-center gap-4">
            <button className="hover:text-zinc-100">
              <FaCog className="text-lg" />
            </button>
            <button className="flex items-center gap-1 bg-white text-[#0040ff] px-4 py-2 rounded-xl text-sm hover:bg-opacity-90 transition font-semibold">
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
      <div className="w-[100%] mx-auto h-screen  bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Blockchain enthusiast, exploring Web3, DeFi, and crypto trading
              opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
