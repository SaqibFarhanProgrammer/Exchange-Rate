import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CompactAuthBox = ({
  onClose,
  userdata,
  handlesignup,
  getprofileimage,
}) => {
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("userdata", JSON.stringify(updatedFormData));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      localStorage.setItem("previewImage", imageURL);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userdata"));
    const savedImage = localStorage.getItem("previewImage");
    if (data) setFormData(data);
    if (savedImage) setPreviewImage(savedImage);
  }, []);

  useEffect(() => {
    getprofileimage(previewImage);
  }, [previewImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userdata({ ...formData });
    handlesignup();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center text-black justify-center  backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 sm:mx-6 bg-white rounded-xl shadow-xl">
        <div className="flex justify-between items-center bg-blue-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Create Account</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition"
          >
            <IoCloseSharp className="text-2xl" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow">
                {previewImage ? (
                  <img
                    src={previewImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 cursor-pointer shadow">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              required
            />
            <textarea
              rows="3"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about yourself..."
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 shadow"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompactAuthBox;
