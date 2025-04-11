import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function StudentDashboard() {
  const [studentName, setStudentName] = useState("Student");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State to toggle chatbot visibility
  const [chatInput, setChatInput] = useState(""); // State for chatbot input
  const [chatMessages, setChatMessages] = useState([]); // State for chatbot messages
  const [isProcessing, setIsProcessing] = useState(false); // State for processing indicator
  const chatContainerRef = useRef(null); // Ref for the chat messages container

  useEffect(() => {
    // Simulate fetching the student's name from an API or local storage
    const fetchStudentName = async () => {
      try {
        const storedName =
          localStorage.getItem("studentName") || "Alex Johnson";
        setStudentName(storedName);
      } catch (error) {
        console.error("Error fetching student name:", error);
      }
    };

    fetchStudentName();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const toggleChatbot = () => {
    if (isChatbotOpen) {
      // Clear messages when chatbot is closed
      setChatMessages([]);
    }
    setIsChatbotOpen((prev) => !prev); // Toggle chatbot visibility
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    if (!chatInput.trim()) return; // Prevent empty messages

    // Add user message to chat
    setChatMessages((prev) => [...prev, { role: "user", content: chatInput }]);

    // Show "Analyzing..." while processing
    setIsProcessing(true);

    try {
      // Send the message to OpenRouter API
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`, // 🔒 Dev use only
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: chatInput }],
          }),
        }
      );

      if (!response.ok) {
        console.error("❌ Error:", response.status, await response.text());
        setChatMessages((prev) => [
          ...prev,
          { role: "system", content: "Error: Unable to fetch response." },
        ]);
        return;
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content;

      // Add API response to chat
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: message },
      ]);
    } catch (error) {
      console.error("❌ Error:", error);
      setChatMessages((prev) => [
        ...prev,
        { role: "system", content: "Error: Unable to fetch response." },
      ]);
    } finally {
      // Clear the input field and stop processing
      setChatInput("");
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Smart Student</h1>
        <nav className="space-y-4">
          <Link to="/" className="block text-lg hover:text-blue-300">
            Dashboard
          </Link>
          <Link
            to="/my-assignments"
            className="block text-lg hover:text-blue-300"
          >
            My Assignments
          </Link>
          <Link
            to="/student-attendance"
            className="block text-lg hover:text-blue-300"
          >
            Attendance
          </Link>
          <Link
            to="/performance-progress"
            className="block text-lg hover:text-blue-300"
          >
            Progress
          </Link>
          <Link
            to="/study-materials"
            className="block text-lg hover:text-blue-300"
          >
            Study Materials
          </Link>
          <Link
            to="/submit-doubt"
            className="block text-lg hover:text-blue-300"
          >
            Ask a Doubt
          </Link>
          <Link to="/leaderboard" className="block text-lg hover:text-blue-300">
            Leaderboard
          </Link>
          <Link to="/settings" className="block text-lg hover:text-blue-300">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Welcome, {studentName}</h2>
          <div className="flex items-center space-x-4">
            {/* Updated EduBot Button */}
            <button
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={toggleChatbot}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Chat with EduBot
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Today's Schedule</h3>
            <p className="text-gray-600">
              Check your upcoming classes and join live sessions directly.
            </p>
          </div>

          {/* Card 2 */}
          <Link to={"/my-assignments"}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">My Assignments</h3>
              <p className="text-gray-600">
                View pending and submitted assignments. Track due dates easily.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to={"/student-attendance"}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Attendance Overview</h3>
              <p className="text-gray-600">
                Track your monthly attendance and receive alerts for low
                attendance.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={"/performance-progress"}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Performance Progress</h3>
              <p className="text-gray-600">
                Visual analytics of grades, assessments, and improvements.
              </p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/leaderboard">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
              <p className="text-gray-600">
                Compare your progress with classmates and stay motivated.
              </p>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to={"/study-material"}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Study Materials</h3>
              <p className="text-gray-600">
                Access e-books, lecture notes, and recorded videos anytime.
              </p>
            </div>
          </Link>

          {/* Card 7 */}
          <Link to={"/submit-doubt"}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Ask a Doubt</h3>
              <p className="text-gray-600">
                Raise questions to your teachers and get guidance instantly.
              </p>
            </div>
          </Link>

          {/* Card 8 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Announcements</h3>
            <p className="text-gray-600">
              Stay updated with school circulars and important notifications.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Feedback & Surveys</h3>
            <p className="text-gray-600">
              Submit course feedback and participate in campus surveys.
            </p>
          </div>

          {/* Card 10 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Calendar</h3>
            <p className="text-gray-600">
              Plan ahead with your academic calendar and deadlines.
            </p>
          </div>

          {/* Card 11 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">My Profile</h3>
            <p className="text-gray-600">
              View and edit personal info, contact details, and login
              credentials.
            </p>
          </div>
        </div>

        {/* Card 12 */}
        <Link to={"/student-quiz"}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Start Quiz</h3>
            <p className="text-gray-600">
              Test your knowledge by starting a quiz and track your performance.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Start Now
            </button>
          </div>
        </Link>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500">
          © 2025 Smart Education | Student Dashboard
        </footer>
      </main>

      {/* Chatbot Window */}
      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-full max-w-md h-[80vh] p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">EduBot</h3>
            <button className="text-red-500 font-bold" onClick={toggleChatbot}>
              X
            </button>
          </div>
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto mb-4 border-t pt-2"
          >
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {isProcessing && (
              <div className="text-center text-gray-500">Analyzing...</div>
            )}
          </div>
          <form onSubmit={handleChatSubmit} className="mt-4">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
