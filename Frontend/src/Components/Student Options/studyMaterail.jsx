import React from "react";

function StudyMaterial() {
  const ebooks = [
    {
      title: "Mathematics Essentials",
      description: "Grade 10 - Algebra, Geometry, Trigonometry",
      link: "https://example.com/mathematics-essentials.pdf", // Replace with actual PDF link
    },
    {
      title: "Science Simplified",
      description: "Grade 10 - Physics, Chemistry, Biology",
      link: "https://example.com/science-simplified.pdf", // Replace with actual PDF link
    },
    {
      title: "English Literature Guide",
      description: "Stories, Poems & Drama - Easy summaries",
      link: "https://example.com/english-literature-guide.pdf", // Replace with actual PDF link
    },
  ];

  const lectureNotes = [
    {
      title: "Chapter 1: Number Systems",
      description: "Includes concepts, formulas & solved examples",
      link: "https://example.com/number-systems-notes.pdf", // Replace with actual PDF link
    },
    {
      title: "Chapter 4: Periodic Table",
      description: "Detailed classification with practice questions",
      link: "https://example.com/periodic-table-notes.pdf", // Replace with actual PDF link
    },
    {
      title: "Chapter 8: Motion & Laws",
      description: "Newton's Laws, Equations of motion & problems",
      link: "https://example.com/motion-laws-notes.pdf", // Replace with actual PDF link
    },
  ];

  const recordedVideos = [
    {
      title: "Algebra Made Easy",
      description: "Video Lesson - Learn how to solve linear equations",
      link: "https://www.youtube.com/watch?v=example1", // Replace with actual video link
    },
    {
      title: "Photosynthesis Explained",
      description: "Fun animation of the entire process in plants",
      link: "https://www.youtube.com/watch?v=example2", // Replace with actual video link
    },
    {
      title: "English Grammar Crash Course",
      description: "Tenses, articles, modals and voice - All in one",
      link: "https://www.youtube.com/watch?v=example3", // Replace with actual video link
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Study Materials</h1>

      {/* E-Books Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">📚 E-Books</h2>
        <div className="grid grid-cols-3 gap-6">
          {ebooks.map((ebook, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{ebook.title}</h3>
              <p className="text-gray-600 mb-4">{ebook.description}</p>
              <a
                href={ebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Lecture Notes Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">📝 Lecture Notes</h2>
        <div className="grid grid-cols-3 gap-6">
          {lectureNotes.map((note, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
              <p className="text-gray-600 mb-4">{note.description}</p>
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                View Notes
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recorded Videos Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">🎥 Recorded Videos</h2>
        <div className="grid grid-cols-3 gap-6">
          {recordedVideos.map((video, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Watch Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500">
        © 2025 Smart Education | Study Materials Page
      </footer>
    </div>
  );
}

export default StudyMaterial;