import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function LiveClass() {
  const [status, setStatus] = useState("Offline");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const videoRef = useRef(null); // Reference to the video element for camera
  const screenRef = useRef(null); // Reference to the video element for screen sharing

  const handleStartClass = async () => {
    setStatus("Online");

    // Access the device's camera
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
      alert("Unable to access the camera. Please check your device permissions.");
    }
  };

  const handleStopClass = () => {
    setStatus("Offline");

    // Stop the camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    // Stop the screen sharing stream
    if (screenRef.current && screenRef.current.srcObject) {
      const tracks = screenRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      screenRef.current.srcObject = null;
    }
  };

  const handleShareScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      if (screenRef.current) {
        screenRef.current.srcObject = stream;
        screenRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing screen sharing:", error);
      alert("Unable to share the screen. Please check your device permissions.");
    }
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Live Class</h1>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Session Controls */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Session Controls</h2>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={handleStartClass}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Start Live Class
          </button>
          <button
            onClick={handleStopClass}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Stop Live Class
          </button>
        </div>
        <p className="text-gray-800">
          Status:{" "}
          <span className={status === "Online" ? "text-green-500" : "text-red-500"}>
            {status}
          </span>
        </p>
      </div>

      {/* Camera Feed */}
      {status === "Online" && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Camera Feed</h2>
          <video
            ref={videoRef}
            className="w-full h-64 bg-black rounded-lg"
            autoPlay
            muted
          ></video>
        </div>
      )}

      {/* Screen Sharing */}
      {status === "Online" && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Screen Sharing</h2>
          <button
            onClick={handleShareScreen}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-4"
          >
            Share Screen
          </button>
          <video
            ref={screenRef}
            className="w-full h-64 bg-black rounded-lg"
            autoPlay
            muted
          ></video>
        </div>
      )}

      {/* Real-time Questions */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Real-time Questions</h2>
        <form onSubmit={handleQuestionSubmit} className="mb-4">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Simulate student question..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit Question
          </button>
        </form>
        <div>
          {questions.length > 0 ? (
            <ul className="list-disc pl-5">
              {questions.map((question, index) => (
                <li key={index} className="text-gray-800 mb-2">
                  {question}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No questions submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveClass;