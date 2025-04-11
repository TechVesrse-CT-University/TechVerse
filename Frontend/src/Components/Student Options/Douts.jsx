import React, { useState } from "react";

function SubmitDoubt() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    doubt: "",
  });

  const [doubts, setDoubts] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new doubt to the list
    setDoubts([...doubts, formData]);

    // Reset form and show success message
    setFormData({
      name: "",
      subject: "",
      doubt: "",
    });
    setSubmitted(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex">
      {/* Form Section */}
      <div className="w-2/3">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Doubt</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {submitted && (
            <div className="mb-4 bg-green-100 text-green-800 p-4 rounded-lg">
              ✅ Doubt added successfully! A teacher will respond shortly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Mathematics, Physics"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Doubt Description Field */}
            <div className="mb-4">
              <label htmlFor="doubt" className="block text-gray-700 font-medium mb-2">
                Describe Your Doubt
              </label>
              <textarea
                id="doubt"
                name="doubt"
                value={formData.doubt}
                onChange={handleChange}
                placeholder="Type your question or issue here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit Doubt
            </button>
          </form>
        </div>
      </div>

      {/* Doubts Section */}
      <div className="w-1/3 ml-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Submitted Doubts</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          {doubts.length > 0 ? (
            doubts.map((doubt, index) => (
              <div
                key={index}
                className="mb-4 p-4 border-b border-gray-200 last:border-b-0"
              >
                <p className="text-gray-800 font-bold">{doubt.name}</p>
                <p className="text-gray-600 italic">{doubt.subject}</p>
                <p className="text-gray-700 mt-2">{doubt.doubt}</p>
                <p className="text-green-600 mt-2">✅ Teacher will respond shortly.</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No doubts submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubmitDoubt;