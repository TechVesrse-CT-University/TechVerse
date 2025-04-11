import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InstituteSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    InstitutionCode: "",
    Name: "",
    Email: "",
    InstituteLocation: "",
    AdminstratorName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/institution/register",
        formData
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");

      // Store institution name in localStorage
      localStorage.setItem("institutionName", formData.Name);

      // Redirect to adminDashboard.jsx
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md rounded-b-3xl p-4 flex justify-around items-center">
        {/* Teacher */}
        <div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => navigate("/teacher-signup")} // Navigate to Teacher Signup
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
            />
          </svg>
          <span className="text-sm font-medium">Teacher</span>
        </div>

        {/* Student */}
        <div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => navigate("/student-signup")} // Navigate to Student Signup
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l-6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 016.16-10.922L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l-6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 016.16-10.922L12 14z"
            />
          </svg>
          <span className="text-sm font-medium">Student</span>
        </div>

        {/* Institute */}
        <div className="flex flex-col items-center text-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 21V9l3-2 3 2v12"
            />
          </svg>
          <span className="text-sm font-medium">Institute</span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-6 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Institution Account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Institution Code */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="InstitutionCode"
              >
                Institution Code
              </label>
              <input
                type="text"
                name="InstitutionCode"
                value={formData.InstitutionCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your institution code"
              />
            </div>

            {/* Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="Name"
              >
                Institution Name
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your institution name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="Email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Institute Location */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="InstituteLocation"
              >
                Institute Location
              </label>
              <input
                type="text"
                name="InstituteLocation"
                value={formData.InstituteLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your institute location"
              />
            </div>

            {/* Administrator Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="AdminstratorName"
              >
                Administrator Name
              </label>
              <input
                type="text"
                name="AdminstratorName"
                value={formData.AdminstratorName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter the administrator's name"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InstituteSignup;