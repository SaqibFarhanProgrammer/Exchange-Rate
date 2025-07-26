import React, { useEffect, useState } from "react";
import { FaEnvelope, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import Login from "../Auth/Login";

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("islogin")) || false
  );
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [userData, setUserData] = useState({});
  const [img, setimg] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("userdata");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("islogin", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthBox(false);
    const updatedData = JSON.parse(localStorage.getItem("userdata"));
    setUserData(updatedData);
    if (updatedData?.img) {
      setProfileImage(updatedData.img);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userdata");
    setUserData({});

    setShowAuthBox(false);
    localStorage.removeItem("previewImage");
  };

  const handleCloseAuthBox = () => {
    setShowAuthBox(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const image = JSON.parse(localStorage.getItem("proimg"));
    if (image) {
      setimg(image);
      console.log(image);
    } else {
      setimg(
        "data:image/png;base64,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"
      );
    }
  });

  return (
    <div className="h-screen w-full bg-[#f4f6fc] font-sans">
      {isLoggedIn ? (
        <div className="flex h-full">
          <aside className="w-full max-w-xs bg-white shadow-md p-8 flex flex-col items-center text-center border-r border-zinc-100">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#0040ff] to-[#00aaff] overflow-hidden shadow-md">
              <img
                src={img}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
              {userData.name || "No Name"}
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
              <h1 className="text-3xl font-semibold text-[#1a1a1a]">
                My Profile
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  Full Name
                </label>
                <div className="bg-[#f6f8fe] p-4 rounded-lg text-sm font-medium text-[#1a1a1a] shadow-sm">
                  {userData.name || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  Email
                </label>
                <div className="flex items-center gap-2 bg-[#f6f8fe] p-4 rounded-lg text-sm font-medium text-[#1a1a1a] shadow-sm">
                  <FaEnvelope className="text-[#0040ff]" />
                  {userData.email || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-1">
                  About Me
                </label>
                <div className="bg-[#f6f8fe] p-4 rounded-lg text-sm text-[#1a1a1a] leading-relaxed shadow-sm">
                  {userData.bio || "No bio provided."}
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
                Welcome to ExchangeGate
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
                <span className="text-lg">Create Account</span>
              </button>
            </div>
          </div>

          {showAuthBox && (
            <Login
              onClose={handleCloseAuthBox}
              onLoginSuccess={handleLoginSuccess}
              handlesignup={handleSignup}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
