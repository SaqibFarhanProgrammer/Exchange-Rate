import React from "react";
import { FaRegUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className=" w-full h-screen bg-white hadow-xl p-8">
      <div className="flex flex-c items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#0040ff] tracking-wide">
          My Profile
        </h2>
        <button className="flex items-center gap-2 text-[#0040ff] hover:text-white hover:bg-[#0040ff] transition px-4 py-2 border border-[#0040ff] rounded-xl text-sm font-medium">
          <FaEdit />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#0040ff] to-[#00aaff] flex items-center justify-center shadow-lg">
            <FaRegUserCircle className="text-white text-6xl" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
            Saqib Khan
          </h3>
          <p className="text-sm text-zinc-500">Crypto Investor & Analyst</p>
        </div>

        <div className="col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-600 mb-1">
              Email
            </label>
            <div className="flex items-center bg-[#f0f5ff] px-4 py-3 rounded-xl text-[#1a1a1a] shadow-sm">
              <FaEnvelope className="mr-3 text-[#0040ff]" />
              saqib@example.com
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-600 mb-1">
              Phone
            </label>
            <div className="flex items-center bg-[#f0f5ff] px-4 py-3 rounded-xl text-[#1a1a1a] shadow-sm">
              <FaPhone className="mr-3 text-[#0040ff]" />
              +92 300 1234567
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-600 mb-1">
              About Me
            </label>
            <p className="bg-[#f0f5ff] p-4 rounded-xl text-sm text-[#1a1a1a] shadow-sm">
              Passionate about crypto trading and blockchain technologies.
              Actively researching Web3 innovations and real-time market trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
