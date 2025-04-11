# EduTect - An Automated one solution for all bodies included in Education process
![](/Frontend/public/image.png)

## Table of Content
- [Problem Statement]
- [Overview]
- [Our Solution]
- [Key Features]
   - [Student Aimed Features]
   - [Teacher Aimed Features]
   - [Admin/Institute Features]
- [Tech Stack Used]
- [Getting Started]
      - [Prerequisites]
      - [Installation]
- [User Guid]
- [Important Note*]



# 🌟 Problem Statement  – EduTech: Automated Smart Education Platform

In today’s rapidly evolving educational landscape, institutions, educators, and students face several systemic challenges:

Teachers struggle with fragmented systems for managing content delivery, student assessment, and performance tracking.

Students lack personalized support outside the classroom and face difficulties finding timely answers to academic doubts.

Institutions lack real-time visibility into teaching effectiveness, student engagement, assignment submissions, and fee management.

Traditional Learning Management Systems (LMS) often fall short in offering intelligent, adaptive, and centralized solutions to these problems.

EduTech aims to address these issues by providing an all-in-one, AI-powered smart education platform that empowers educators to upload and manage academic content, enables students to interact with an intelligent AI chatbot for resolving doubts and generating practice quizzes, and equips institutions with tools to monitor academic and administrative activity in real-time.

![](/Frontend/public/images/adminDas.png)


## 📘 Overview

In the modern educational landscape, digital platforms have become essential—but many existing systems fail to fully address the diverse needs of students, teachers, and institutions. Key challenges include lack of real-time support for students, inefficient content and assignment management for educators, and limited performance tracking tools for institutes.

EduTech is designed to bridge these gaps. It is a smart, AI-powered education platform that centralizes learning resources, communication, and administrative processes. With features like AI-assisted doubt resolution, automated quiz generation, and role-based dashboards, EduTech transforms traditional learning into a more intelligent, scalable, and interactive experience.

## 🎯 Our Solution

EduTech provides an all-in-one web-based solution tailored for:

👨‍🏫 Teachers

Upload video lectures, notes, and assignments

Create and assign quizzes

Submit grades and track student performance

👩‍🎓 Students

Access all uploaded content in one place

Interact with an AI chatbot to clear doubts using DeepSeek R1 API

Generate topic-specific quizzes using AI for practice

Submit assignments and view grades

🏫 Institutions

Monitor teacher activity and student engagement

Track assignment submissions and fee payment statuses

View real-time analytics and performance reports

Key Highlights:

Role-based Authentication using Passport.js

AI Chatbot powered by DeepSeek R1 via OpenRouter

MongoDB for scalable database management

Multer for handling secure file uploads

Clean separation of concerns with modular backend structure

React + Tailwind CSS frontend (hosted separately)


# 🔧 Key Features

## 📘 Student Aimed Features

![](/Frontend/public/images/studentdas.png)
Access and stream video lectures, notes, and PDF materials uploaded by teachers

Interact with an AI-powered chatbot (DeepSeek R1 via OpenRouter) to resolve academic doubts in real-time

Generate topic-specific quizzes for self-practice using AI

Submit assignments and view grades and feedback

View personal performance reports and assignment deadlines

get content summary in short by AI 

## 👨‍🏫 Teacher Aimed Features

![](/Frontend/public/images/teacherDas.png)
Upload and manage academic content (lectures, PDFs, quizzes, assignments)

Create topic-based quizzes and assignments with manual or AI assistance

Grade submitted work and publish results to student dashboards

View individual and class-level student performance analytics

Respond to student queries or moderate AI chatbot-generated feedback

## 🏫 Admin/Institute Features

![](/Frontend/public/images/adminDas.png)
Manage student and teacher accounts and access controls

Monitor teacher activities such as content uploads and grading frequency

Track student engagement, assignment submission rates, and fee status

Generate reports on institutional performance and engagement metrics

View consolidated dashboards to oversee the entire academic ecosystem

# 🧪 Tech Stack Used

## Frontend:

React.js – for building responsive and component-based UI

Tailwind CSS – for fast and utility-first styling

Axios – for handling API requests to the backend

## Backend:

Node.js – for building the runtime environment

Express.js – for creating the RESTful API server

MongoDB – as the NoSQL database

Mongoose – for modeling and interacting with MongoDB

Passport.js – for role-based authentication and session management

Multer – for handling file uploads (PDFs, images, etc.)

dotenv – for environment variable management

## AI & APIs:

DeepSeek R1 (Free model) – used for AI-based doubt solving and quiz generation

Tools & Services:

Postman – for API testing

Git & GitHub – for version control and collaboration

Visual Studio Code – primary IDE for development

## Python : for automated tasks 
- Note : we are not able to connect python with our main project due to lack of time but it is properly working 
         code execution Guide is provided below


# 🚀 Getting Started

Follow the steps below to set up and run the EduTech project on your local machine.

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js (v14 or higher)

npm or yarn

MongoDB (local or cloud – e.g., MongoDB Atlas)

Git

### ptional but Recommended:

Postman (for testing APIs)

VS Code or any modern code editor

## Backend :
- Move to Backend folder using this command - cd Backend
- open terminal and type this command to start Backend server - node server.js

## Frontend :
- Move to frontend folder using this command - cd frontend
- open terminal and type this command to start frontend server - npm run dev

## Folder Structure :
<pre>
   Code Crafter Hackathon Project/
├── Backend/
│   ├── Models/                   # Database models for MongoDB
│   │   ├── Institute.js          # Schema for institute data
│   │   ├── Student.js            # Schema for student data
│   │   ├── Teacher.js            # Schema for teacher data
│   ├── Routes/                   # API routes for backend
│   │   ├── InstituteRoutes.js    # Routes for institute-related operations
│   │   ├── StudentRoutes.js      # Routes for student-related operations
│   │   ├── TeacherRoutes.js      # Routes for teacher-related operations
│   ├── node_modules/             # Backend dependencies
│   ├── package.json              # Backend dependencies and scripts
│   ├── package-lock.json         # Backend dependency lock file
│   ├── server.js                 # Main server file for backend
│
├── Frontend/
│   ├── public/                   # Public assets for the frontend
│   │   ├── index.html            # Main HTML file for the React app
│   ├── src/                      # Source code for the frontend
│   │   ├── assets/               # Static assets like images, icons, etc.
│   │   ├── Components/           # React components
│   │   │   ├── Student Options/  # Components for student features
│   │   │   │   ├── Douts.jsx             # Submit doubts page
│   │   │   │   ├── LeaderBoard.jsx       # Leaderboard page
│   │   │   │   ├── myAssignment.jsx      # Assignments page
│   │   │   │   ├── PerformanceProgress.jsx # Performance progress page
│   │   │   │   ├── studentAttendence.jsx # Attendance tracking page
│   │   │   │   ├── studentQuiz.jsx       # Quiz page for students
│   │   │   │   ├── studyMaterial.jsx     # Study materials page
│   │   │   ├── Teacher Options/  # Components for teacher features
│   │   │   │   ├── liveClass.jsx         # Live class page
│   │   │   │   ├── myclass.jsx           # Manage classes page
│   │   │   │   ├── newAssignment.jsx     # Create new assignments page
│   │   │   │   ├── adminDashboard.jsx    # Admin dashboard
│   │   │   │   ├── instituteSignup.jsx   # Institute signup page
│   │   │   │   ├── Landing.jsx           # Landing page
│   │   │   │   ├── studentSignup.jsx     # Student signup page
│   │   │   │   ├── studentDashboard.jsx  # Student dashboard
│   │   │   │   ├── teacherDashboard.jsx  # Teacher dashboard
│   │   │   │   ├── teacherLogin.jsx      # Teacher login page
│   │   │   │   ├── teacherSignup.jsx     # Teacher signup page
│   │   ├── App.jsx                # Main React component
│   │   ├── App.css                # Global styles for the app
│   │   ├── index.css              # Additional styles
│   │   ├── main.jsx               # Entry point for the React app
│   ├── node_modules/             # Frontend dependencies
│   ├── package.json              # Frontend dependencies and scripts
│   ├── package-lock.json         # Frontend dependency lock file
│   ├── README.md                 # Documentation for the frontend
│
├── .gitignore                    # Files and folders to ignore in Git
├── README.md                     # Main project documentation
</pre>

# Pyhton Setup and use in Project :
### ✅ Backend Setup (Python + Flask)

bash
cd backend
python -m venv venv
source venv/bin/activate         # On Windows: venv\Scripts\activate
pip install -r requirements.txt


If using an NLP API (like Cohere), add a .env file:

env
COHERE_API_KEY=your_api_key_here


Run the Flask backend server:

bash
python app.py


The backend will run at: http://127.0.0.1:5000

# 📘 User Guide

This guide walks through how different users interact with the EduTech platform.

## 👩‍🎓 Student

Register or log in as a student from the Student Portal.

Access dashboard to:

View uploaded lectures, notes, and assignments.

Ask questions via the AI Chatbot.

Generate practice quizzes based on any topic using AI.

Submit assignments and check grades.

View personal performance reports and upcoming deadlines.

## 👨‍🏫 Teacher

Register or log in as a teacher from the Teacher Portal.

Access dashboard to:

Upload content including lectures, PDFs, and assignments.

Create quizzes and assessments manually or with AI support.

Grade submitted assignments and publish results.

Track student engagement and performance analytics.

## 🏫 Admin / Institute

Log in through the Admin Portal.

Access dashboard to:

Manage and verify teacher/student registrations.

Monitor content uploads and grading activity by teachers.

Track student submissions, fee status, and engagement metrics.

Generate institutional reports and system-wide analytics.

# UI :
![](/Frontend/public/images/UI.png)

![](/Frontend/public/images/UI2.png)

# Important Note :
- We are planned and Aimed to implement many features but we are not able to complete whole project as planed So it is just an Working prototype of our Idea and we can improve it in feture 

![](/Frontend/public/images/UI3.png)
