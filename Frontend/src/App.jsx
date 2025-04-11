import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
// import Home from './Components/Home'; // Assuming you have a Home component
import axios from "axios"; // Install axios if not already installed
import TeacherSignup from "./Components/teacherSignup";
import StudentSignup from "./Components/studentSignup";
import InstituteSignup from "./Components/instituteSignup";
import TeacherDashboard from "./Components/teacherDashboard";
import StudentDashboard from "./Components/studentDashboard";
import AdminDashboard from "./Components/adminDashboard";
import NewAssignment from "./Components/Teacher Options/newAssignment";
import MyAssignment from "./Components/Student Options/myAssignment";
import StudentQuiz from "./Components/Student Options/studentQuiz";
import PerformanceProgress from "./Components/Student Options/PerformanceProgress";
import StudentAttendance from "./Components/Student Options/studentAttendence";
import StudyMaterial from "./Components/Student Options/studyMaterail";
import SubmitDoubt from "./Components/Student Options/Douts";
import LeaderBoard from "./Components/Student Options/LeaderBoard";
import LiveClass from "./Components/Teacher Options/liveClass";
import MyClasses from "./Components/Teacher Options/myclass";
function App() {
  const [shouldRenderHome, setShouldRenderHome] = useState(false);

  useEffect(() => {
    const checkApiRoutes = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axios.get("http://localhost:5000/teacher/is-logged-in"),
          axios.get("http://localhost:5000/student/is-logged-in"),
          axios.get("http://localhost:5000/institution/is-logged-in"),
        ]);

        if (res1.data === true || res2.data === true || res3.data === true) {
          setShouldRenderHome(true);
        }
      } catch (error) {
        console.error("Error checking API routes:", error);
      }
    };

    checkApiRoutes();
  }, []);

  return (
    <>
      <main>
        <Router>
          <Routes>
            {shouldRenderHome ? (
              // <Route path="/" element={<Home />} />
              <h1>Home</h1>
            ) : (
              <Route path="/" element={<Landing />} />
            )}
            <Route path="/teacherLogin" element={<TeacherSignup />} />
            <Route path="/student-signup" element={<StudentSignup />} />
            <Route path="/institute-signup" element={<InstituteSignup />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/new-assignment" element={<NewAssignment />} />
            <Route path="/my-assignments" element={<MyAssignment />} />
            <Route path="/student-quiz" element={<StudentQuiz />} />
            <Route path="/performance-progress" element={<PerformanceProgress />} />
            <Route path="/student-attendance" element={<StudentAttendance />} />
            <Route path="/study-material" element={<StudyMaterial />} />
            <Route path="/submit-doubt" element={<SubmitDoubt />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/live-class" element={<LiveClass />} />
            <Route path="/my-classes" element={<MyClasses />} />
            {/* Add more routes as needed */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
