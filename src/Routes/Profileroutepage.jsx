import React, { useState } from "react";
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
    <div className="h-screen w-full bg-[#f4f6fc] font-sans">
      {isLoggedIn ? (
        <div className="flex h-full">
          <aside className="w-full max-w-xs bg-white shadow-md p-8 flex flex-col items-center text-center border-r border-zinc-100">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#0040ff] to-[#00aaff] overflow-hidden shadow-md">
              <img
                src={
                  profileimage ||
                  "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
                }
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#1a1a1a] tracking-tight">
              {userprofiledata?.name || "No Name"}
            </h2>
            <button
              onClick={handleLogout}
              className="mt-6 flex items-center gap-2 bg-[#0040ff] text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 font-medium transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </aside>

          <main className="flex-1 p-10 overflow-y-auto">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-3xl font-semibold text-[#1a1a1a] tracking-tight">
                My Profile
              </h1>
              <button className="text-[#0040ff] hover:text-[#0030cc] transition text-lg">
                <FaCog />
              </button>
            </div>

            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  Full Name
                </label>
                <div className="bg-[#f6f8fe] p-4 rounded-lg text-sm font-medium text-[#1a1a1a] shadow-sm">
                  {userprofiledata?.name || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  Email
                </label>
                <div className="flex items-center gap-2 bg-[#f6f8fe] p-4 rounded-lg text-sm font-medium text-[#1a1a1a] shadow-sm">
                  <FaEnvelope className="text-[#0040ff]" />
                  {userprofiledata?.email || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  About Me
                </label>
                <div className="bg-[#f6f8fe] p-4 rounded-lg text-sm text-[#1a1a1a] leading-relaxed shadow-sm">
                  {userprofiledata?.bio || "No bio provided."}
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="login-screen flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">
                Welcome to CryptoHub
              </h2>
              <p className="text-white mt-2 text-sm">
                Your personal crypto dashboard
              </p>
            </div>
            <div className="p-8 space-y-6">
              <button
                onClick={() => setShowAuthBox(true)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
              >
                <FaUserCircle className="text-xl" />
                <span className="text-lg">Get Started – It's Free</span>
              </button>
            </div>
          </div>
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
