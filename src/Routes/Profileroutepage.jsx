import React, { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaSignOutAlt, FaCog } from "react-icons/fa";
import Login from "../Auth/Login";

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [userprofiledata, setuserprofiledata] = useState({});
  const [profileimage, setprofileimage] = useState();

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

  const userdata = (params) => {
    setuserprofiledata(params);
  };

  const handlesignup = () => {
    setIsLoggedIn(true);
  };

  function getprfoileimage(params) {
    setprofileimage(params);
  }

  return (
    <div className="h-screen flex flex-col bg-[#f4f6fc] font-sans w-full profile-wrapper">
      {isLoggedIn ? (
        <>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#6b4eff] to-[#2d9cdb] text-white py-6 px-10 shadow-lg profile-header">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold logo">Crypto Profile</h1>
              <div className="flex items-center gap-4 header-actions">
                <button className="hover:text-zinc-100 settings-button">
                  <FaCog className="text-lg" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-white text-[#0040ff] px-4 py-2 rounded-xl text-sm hover:bg-opacity-90 transition font-semibold logout-button"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="w-full mx-auto h-screen bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 profile-content">
            {/* Left Section (Profile Image + Name) */}
            <div className="flex flex-col items-center text-center profile-sidebar">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#0040ff] to-[#00aaff] flex items-center justify-center shadow-lg profile-image-container">
                <img
                  className="rounded-full profile-image"
                  src={profileimage}
                  alt="Profile"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[#1a1a1a] profile-name">
                {userprofiledata?.name || "No Name"}
              </h2>
            </div>

            {/* Right Section (User Info) */}
            <div className="md:col-span-2 space-y-4 profile-details">
              <div className="profile-field">
                <label className="text-xs text-zinc-500">Full Name</label>
                <div className="bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a] font-medium">
                  {userprofiledata?.name || "N/A"}
                </div>
              </div>

              <div className="profile-field">
                <label className="text-xs text-zinc-500">Email</label>
                <div className="flex items-center bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a] font-medium">
                  <FaEnvelope className="mr-2 text-[#0040ff]" />
                  {userprofiledata?.email || "N/A"}
                </div>
              </div>

              <div className="profile-field">
                <label className="text-xs text-zinc-500">About Me</label>
                <div className="bg-[#f5f8ff] p-3 rounded-xl shadow text-sm text-[#1a1a1a]">
                  {userprofiledata?.bio || "No bio provided."}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Login Page UI
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 login-screen">
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden login-card">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center login-card-header">
              <h2 className="text-3xl font-bold text-white mb-2 login-title">
                Welcome to CryptoHub
              </h2>
            </div>

            <div className="p-8 space-y-6 login-card-body">
              <button
                onClick={() => setShowAuthBox(true)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg login-button"
              >
                <FaUserCircle className="text-xl" />
                <span className="text-lg">Get Started - It's Free</span>
              </button>
            </div>
          </div>

          {/* Login Modal */}
          {showAuthBox && (
            <Login
              onClose={handleCloseAuthBox}
              onLoginSuccess={handleLoginSuccess}
              userdata={userdata}
              handlesignup={handlesignup}
              getprfoileimage={getprfoileimage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
