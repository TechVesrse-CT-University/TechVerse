import React from "react";
import { Link } from "react-router-dom";

function LeaderBoard() {
  const leaderboardData = [
    { rank: 1, name: "Anaya Gupta", grade: "95%", completion: "100%", badge: "Top Performer" },
    { rank: 2, name: "Rohan Mehta", grade: "93%", completion: "98%", badge: "Math Genius" },
    { rank: 3, name: "You", grade: "90%", completion: "95%", badge: "Consistent" },
    { rank: 4, name: "Sana Rehman", grade: "88%", completion: "94%", badge: "Creative Thinker" },
    { rank: 5, name: "Manav Sinha", grade: "85%", completion: "91%", badge: "Improving" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Class Leaderboard</h1>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Compare Your Progress with Classmates
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Rank</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Average Grade</th>
              <th className="border border-gray-300 px-4 py-2">Completion %</th>
              <th className="border border-gray-300 px-4 py-2">Badges</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((student, index) => (
              <tr
                key={index}
                className={`text-center ${
                  student.name === "You" ? "bg-blue-100" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">{student.rank}</td>
                <td className="border border-gray-300 px-4 py-2 font-bold">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.grade}</td>
                <td className="border border-gray-300 px-4 py-2">{student.completion}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                    {student.badge}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500">
        🌟 Keep learning, stay curious! You're just steps away from the top! 🌟
        <br />
        © 2025 Smart Education | Leaderboard Page
      </footer>
    </div>
  );
}

export default LeaderBoard;