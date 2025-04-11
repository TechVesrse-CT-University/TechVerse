import React from "react";
import { Link } from "react-router-dom";

function StudentAttendance() {
  const totalDays = 30;
  const daysPresent = 22;
  const daysAbsent = totalDays - daysPresent;
  const attendancePercentage = ((daysPresent / totalDays) * 100).toFixed(1);

  const attendanceData = [
    { day: 1, status: "Present" },
    { day: 2, status: "Absent" },
    { day: 3, status: "Present" },
    { day: 4, status: "Present" },
    { day: 5, status: "Absent" },
    { day: 6, status: "Present" },
    { day: 7, status: "Absent" },
    { day: 8, status: "Present" },
    { day: 9, status: "Absent" },
    { day: 10, status: "Present" },
    { day: 11, status: "Present" },
    { day: 12, status: "Absent" },
    { day: 13, status: "Present" },
    { day: 14, status: "Absent" },
    { day: 15, status: "Present" },
    { day: 16, status: "Absent" },
    { day: 17, status: "Present" },
    { day: 18, status: "Present" },
    { day: 19, status: "Absent" },
    { day: 20, status: "Present" },
    { day: 21, status: "Present" },
    { day: 22, status: "Present" },
    { day: 23, status: "Absent" },
    { day: 24, status: "Present" },
    { day: 25, status: "Present" },
    { day: 26, status: "Absent" },
    { day: 27, status: "Absent" },
    { day: 28, status: "Absent" },
    { day: 29, status: "Present" },
    { day: 30, status: "Present" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Overview</h1>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Summary - April 2025</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{totalDays}</p>
            <p>Total Days</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{daysPresent}</p>
            <p>Days Present</p>
          </div>
          <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{daysAbsent}</p>
            <p>Days Absent</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">{attendancePercentage}%</p>
            <p>Attendance %</p>
          </div>
        </div>
        {attendancePercentage < 75 && (
          <div className="mt-4 bg-yellow-100 text-yellow-800 p-4 rounded-lg">
            <p className="flex items-center">
              <span className="mr-2">⚠️</span>
              Alert: Your attendance is below 75%. Please ensure you attend regularly to avoid academic issues.
            </p>
          </div>
        )}
      </div>

      {/* Attendance Calendar */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Attendance Calendar</h2>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span>
            <p>Present</p>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></span>
            <p>Absent</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {attendanceData.map((day) => (
            <div
              key={day.day}
              className={`p-4 rounded-lg text-center font-bold ${
                day.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500">
        © 2025 Smart Education | Attendance Overview
      </footer>
    </div>
  );
}

export default StudentAttendance;