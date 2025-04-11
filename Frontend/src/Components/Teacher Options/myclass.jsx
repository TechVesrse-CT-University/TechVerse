import React from "react";
import { Link } from "react-router-dom";

function MyClasses() {
  const classes = [
    {
      id: 1,
      subject: "Mathematics",
      grade: "Grade 10",
      schedule: "Monday & Wednesday – 10:00 AM to 11:00 AM",
      nextClass: "April 15, 2025",
      outline: "Algebra, Geometry, Trigonometry, Statistics",
    },
    {
      id: 2,
      subject: "Computer Science",
      grade: "Grade 12",
      schedule: "Tuesday & Friday – 1:00 PM to 2:30 PM",
      nextClass: "April 12, 2025",
      outline: "OOP, Data Structures, Web Development",
    },
  ];

  const handleEditSchedule = (id) => {
    alert(`Edit schedule for class ID: ${id}`);
  };

  const handleUpdateOutline = (id) => {
    alert(`Update course outline for class ID: ${id}`);
  };

  const handleCreateClass = () => {
    alert("Create a new class");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Classes</h1>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Upcoming & Current Classes */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Upcoming & Current Classes</h2>
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-gray-50 shadow-md rounded-lg p-6 mb-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {classItem.subject} - {classItem.grade}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Schedule:</strong> {classItem.schedule}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Next Class:</strong> {classItem.nextClass}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Course Outline:</strong> {classItem.outline}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEditSchedule(classItem.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Edit Schedule
              </button>
              <button
                onClick={() => handleUpdateOutline(classItem.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Update Outline
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Class */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Class</h2>
        <button
          onClick={handleCreateClass}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          + Create Class
        </button>
      </div>
    </div>
  );
}

export default MyClasses;