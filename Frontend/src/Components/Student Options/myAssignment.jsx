import React, { useState } from "react";

function MyAssignment() {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [summary, setSummary] = useState(""); // State to store the API response
  const [loading, setLoading] = useState(false); // State to show loading indicator
  const [fileName, setFileName] = useState(""); // State to store the selected file name

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // Store the selected file
    setFileName(selectedFile ? selectedFile.name : ""); // Update the file name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file to summarize.");
      return;
    }

    try {
      setLoading(true);

      // Read the file content
      const fileContent = await file.text();

      // Call the API with the file content and prompt
      const apiKey = "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"; // 🔒 Dev use only
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            { role: "user", content: `Summarize this file:\n\n${fileContent}` },
          ],
        }),
      });

      if (!response.ok) {
        console.error("❌ Error:", response.status, await response.text());
        alert("Failed to summarize the file. Please try again.");
        return;
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content;

      setSummary(message); // Store the summary in state
      console.log("✅ Summary:", message);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("An error occurred while summarizing the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">File Summarizer</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        {/* File Upload Field */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept=".txt,.pdf,.docx" // Accept specific file types
          />
          {fileName && (
            <p className="mt-2 text-sm text-gray-600">Selected File: {fileName}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Summarizing..." : "Summarize File"}
        </button>
      </form>

      {/* Display Summary */}
      {summary && (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default MyAssignment;