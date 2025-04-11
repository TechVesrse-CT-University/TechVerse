import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests

function NewAssignment() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedAssignments, setUploadedAssignments] = useState([]); // State to store uploaded assignments

  const handleAddAssignment = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("subject", subject);
    if (file) {
      formData.append("file", file); // Append the file if it exists
    }

    try {
      // Send the data to the server
      const response = await axios.post(
        "http://localhost:5000/teacher/add-content",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file uploads
          },
        }
      );

      console.log("Response:", response.data);
      alert("Assignment added successfully!");

      // Add the new assignment to the uploaded assignments table
      setUploadedAssignments((prev) => [
        ...prev,
        {
          title: title,
          subject: subject,
          file: file ? file.name : "No file uploaded",
        },
      ]);

      // Clear the form after successful submission
      setTitle("");
      setDescription("");
      setSubject("");
      setFile(null);
    } catch (error) {
      console.error("Error adding assignment:", error);
      alert("Failed to add assignment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate("/dashboard")} // Navigate back to the dashboard
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-6"
      >
        ← Back to Dashboard
      </button>

      {/* Add New Assignment Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Assignment</h1>
        <form onSubmit={handleAddAssignment}>
          {/* Title */}
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Assignment Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter assignment description here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label
              htmlFor="file"
              className="block text-gray-700 font-medium mb-2"
            >
              Upload File (Optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Add Assignment Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Assignment
          </button>
        </form>
      </div>

      {/* Uploaded Assignments Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Uploaded Assignments</h2>
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">File</th>
            </tr>
          </thead>
          <tbody>
            {uploadedAssignments.length > 0 ? (
              uploadedAssignments.map((assignment, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2 px-4">{assignment.title}</td>
                  <td className="py-2 px-4">{assignment.subject}</td>
                  <td className="py-2 px-4">{assignment.file}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 text-center text-gray-500"
                >
                  No assignments uploaded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewAssignment;