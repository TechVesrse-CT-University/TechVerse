import React, { useState, useEffect } from "react";

function PerformanceProgress() {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("performanceData")) || [];
    setPerformanceData(storedData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Performance Progress</h1>

      {performanceData.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-2">Topic</th>
                <th className="border border-gray-300 px-4 py-2">Marks</th>
                <th className="border border-gray-300 px-4 py-2">Grade</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{entry.topic}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.marks}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.grade}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No performance data available. Complete a quiz to see your progress.</p>
      )}
    </div>
  );
}

export default PerformanceProgress;