import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    StudentID: "",
    Email: "",
    Institution: "",
    Course: "",
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
        "http://localhost:5000/student/register",
        formData
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");

      // Store student's name in localStorage
      localStorage.setItem("studentName", formData.Name);

      // Redirect to studentDashboard.jsx
      navigate("/student-dashboard");
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
          onClick={() => navigate("/teacherLogin")} // Navigate to Teacher Signup
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
              d="M12 14l9-5-9-5-9 5z"
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
              d="M12 14l9-5-9-5-9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
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
        <div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => navigate("/institute-signup")} // Navigate to Institute Signup
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
            Create Student Account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="Name"
              >
                Full Name
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Student ID */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="StudentID"
              >
                Student ID
              </label>
              <input
                type="text"
                name="StudentID"
                value={formData.StudentID}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your student ID"
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

            {/* Institution */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="Institution"
              >
                Institution
              </label>
              <input
                type="text"
                name="Institution"
                value={formData.Institution}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your institution name"
              />
            </div>

            {/* Course */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="Course"
              >
                Course
              </label>
              <input
                type="text"
                name="Course"
                value={formData.Course}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your course"
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

export default StudentSignup;