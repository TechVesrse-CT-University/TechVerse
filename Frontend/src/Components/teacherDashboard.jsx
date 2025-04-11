import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Link for navigation

function TeacherDashboard() {
  const [teacherName, setTeacherName] = useState("Professor");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State to toggle chatbot visibility
  const [chatInput, setChatInput] = useState(""); // State for chatbot input
  const [chatMessages, setChatMessages] = useState([]); // State for chatbot messages
  const [isProcessing, setIsProcessing] = useState(false); // State for processing indicator
  const chatContainerRef = useRef(null); // Ref for the chat messages container

  useEffect(() => {
    // Simulate fetching the teacher's name from an API or local storage
    const fetchTeacherName = async () => {
      try {
        const storedName = localStorage.getItem("teacherName") || "John Doe";
        setTeacherName("Professor " + storedName);
      } catch (error) {
        console.error("Error fetching teacher name:", error);
      }
    };

    fetchTeacherName();
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Smart Teacher</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block text-lg hover:text-blue-300">
            Dashboard
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            My Classes
          </Link>
          <Link
            to="/new-assignment" // Navigate to the New Assignment page
            className="block text-lg hover:text-blue-300"
          >
            Assignments
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Attendance
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Messages
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Analytics
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Student Leaderboard
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Resources
          </Link>
          <Link to="#" className="block text-lg hover:text-blue-300">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Welcome, {teacherName}</h2>
          <div>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={toggleChatbot} // Toggle chatbot on click
            >
              EduBot
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4">
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to="/live-class">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Live Class</h3>
              <p className="text-gray-600">
                Start live sessions, share your screen, and interact with
                students in real-time.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">
              AI-based Student Insights
            </h3>
            <p className="text-gray-600">
              Use AI to identify weak students and recommend resources.
            </p>
          </div>

          {/* Card 3 */}
          <Link to="/my-classes">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">My Classes</h3>
              <p className="text-gray-600">
                Manage your class schedules, outlines, and create new classes.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={"/new-assignment"}>
            {" "}
            {/* Link to New Assignment page */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Assignments</h3>
              <p className="text-gray-600">
                Create, assign, and evaluate assignments with rubric tools.
              </p>
            </div>
          </Link>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Attendance</h3>
            <p className="text-gray-600">
              Automated daily tracking, absentee notifications, and analytics.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
            <p className="text-gray-600">
              Visual charts and graphs showing student and class progress.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Teaching Tools</h3>
            <p className="text-gray-600">
              Access whiteboards, quizzes, polls, timers, and file sharing
              tools.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Calendar</h3>
            <p className="text-gray-600">
              Track your schedule, plan meetings, deadlines, and school events.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Feedback & Surveys</h3>
            <p className="text-gray-600">
              Collect feedback and conduct surveys to improve teaching methods.
            </p>
          </div>
        </div>
      </main>

      {/* Chatbot Window */}
      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-full max-w-md h-[80vh] p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">EduBot</h3>
            <button
              className="text-red-500 font-bold"
              onClick={toggleChatbot} // Close chatbot on click
            >
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

export default TeacherDashboard;
