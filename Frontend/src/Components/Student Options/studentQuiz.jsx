import React, { useState } from "react";

const quizData = {
  "JavaScript": [
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      options: ["22", "4", "NaN", "Error"],
      answer: "22",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Apple"],
      answer: "Netscape",
    },
    {
      question: "What does '===' mean in JavaScript?",
      options: ["Assignment", "Equality", "Strict Equality", "Comparison"],
      answer: "Strict Equality",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: "React",
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the default value of an uninitialized variable in JavaScript?",
      options: ["null", "undefined", "0", "NaN"],
      answer: "undefined",
    },
    {
      question: "Which method is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "parseFloat()", "Number()", "String()"],
      answer: "parseInt()",
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "Refers to the current object",
        "Refers to the parent object",
        "Refers to the global object",
        "None of the above",
      ],
      answer: "Refers to the current object",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "Both // and /* */"],
      answer: "Both // and /* */",
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["String", "Number", "Boolean", "Character"],
      answer: "Character",
    },
  ],
  "Python": [
    {
      question: "What is the output of print(2 ** 3)?",
      options: ["6", "8", "9", "Error"],
      answer: "8",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "lambda"],
      answer: "def",
    },
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".python", ".pyt", ".pt"],
      answer: ".py",
    },
    {
      question: "Which of the following is a Python framework?",
      options: ["Django", "React", "Laravel", "Flask"],
      answer: "Django",
    },
    {
      question: "What is the output of print(type([]))?",
      options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "Error"],
      answer: "<class 'list'>",
    },
    {
      question: "Which of the following is not a Python data type?",
      options: ["List", "Tuple", "Set", "Array"],
      answer: "Array",
    },
    {
      question: "What does the 'len()' function do in Python?",
      options: [
        "Returns the length of an object",
        "Returns the type of an object",
        "Returns the size of memory",
        "None of the above",
      ],
      answer: "Returns the length of an object",
    },
    {
      question: "Which operator is used for floor division in Python?",
      options: ["/", "//", "%", "**"],
      answer: "//",
    },
    {
      question: "What is the output of print(10 % 3)?",
      options: ["1", "2", "3", "Error"],
      answer: "1",
    },
    {
      question: "Which of the following is used to create a virtual environment in Python?",
      options: ["venv", "virtualenv", "pipenv", "All of the above"],
      answer: "All of the above",
    },
  ],
  "HTML": [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperText and Links Markup Language",
        "None of the above",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>",
    },
    {
      question: "What is the purpose of the <title> tag in HTML?",
      options: [
        "Defines the title of the document",
        "Defines the main heading",
        "Defines a hyperlink",
        "None of the above",
      ],
      answer: "Defines the title of the document",
    },
    {
      question: "Which attribute is used to provide a unique identifier to an HTML element?",
      options: ["class", "id", "name", "style"],
      answer: "id",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<hr>"],
      answer: "<br>",
    },
    {
      question: "Which HTML tag is used to define a table row?",
      options: ["<tr>", "<td>", "<th>", "<table>"],
      answer: "<tr>",
    },
    {
      question: "What is the purpose of the <meta> tag in HTML?",
      options: [
        "Provides metadata about the document",
        "Defines the main content",
        "Creates a hyperlink",
        "None of the above",
      ],
      answer: "Provides metadata about the document",
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>",
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h1>", "<h6>", "<heading>", "<header>"],
      answer: "<h1>",
    },
    {
      question: "Which HTML attribute is used to specify an inline CSS style?",
      options: ["style", "class", "id", "css"],
      answer: "style",
    },
  ],
};

function StudentQuiz() {
  const [selectedTopic, setSelectedTopic] = useState("JavaScript");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizData[selectedTopic][currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData[selectedTopic].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Save performance data when the quiz is completed
      const performanceEntry = {
        topic: selectedTopic,
        marks: score + (selectedOption === currentQuestion.answer ? 1 : 0),
        grade: calculateGrade(score + (selectedOption === currentQuestion.answer ? 1 : 0)),
        date: new Date().toLocaleDateString(),
      };

      const storedData = JSON.parse(localStorage.getItem("performanceData")) || [];
      localStorage.setItem("performanceData", JSON.stringify([...storedData, performanceEntry]));

      setShowScore(true);
    }
  };

  const calculateGrade = (marks) => {
    if (marks >= 9) return "A+";
    if (marks >= 7) return "A";
    if (marks >= 5) return "B";
    if (marks >= 3) return "C";
    return "D";
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Quiz Page</h1>

      {/* Topic Selector */}
      <div className="mb-6">
        <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
          Select Topic:
        </label>
        <select
          id="topic"
          value={selectedTopic}
          onChange={handleTopicChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(quizData).map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Quiz Section */}
      {!showScore ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1} of {quizData[selectedTopic].length}
          </h2>
          <p className="text-gray-700 mb-4">
            {quizData[selectedTopic][currentQuestionIndex].question}
          </p>
          <div className="space-y-4">
            {quizData[selectedTopic][currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quiz Completed!</h2>
          <p className="text-gray-700 mb-4">
            Your Score: {score} / {quizData[selectedTopic].length}
          </p>
          <button
            onClick={restartQuiz}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentQuiz;