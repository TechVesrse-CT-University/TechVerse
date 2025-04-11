import React from "react";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Institution Panel</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-lg hover:text-blue-300">
            Dashboard
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Manage Faculty
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Manage Students
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Analytics
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Reports
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Academic Settings
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Admissions
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Events & Notices
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            Library Management
          </a>
          <a href="#" className="block text-lg hover:text-blue-300">
            System Users
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Institution Admin</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Logout
          </button>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Faculty Overview</h3>
            <p className="text-gray-600">
              View faculty profiles, assign classes, and monitor activity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Student Management</h3>
            <p className="text-gray-600">
              Enroll students, manage classes, and handle student records.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
            <p className="text-gray-600">
              Visualize school-wide academic trends and attendance stats.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Admission Panel</h3>
            <p className="text-gray-600">
              Manage admissions, forms, eligibility, and application status.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Timetable Settings</h3>
            <p className="text-gray-600">
              Design master schedules, assign classrooms, and prevent clashes.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Institutional Reports</h3>
            <p className="text-gray-600">
              Generate detailed academic, financial, and behavior reports.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Library Dashboard</h3>
            <p className="text-gray-600">
              Manage book inventory, issue status, and overdue tracking.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Notices & Events</h3>
            <p className="text-gray-600">
              Post circulars, organize campus events, and schedule meetings.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Data Backup</h3>
            <p className="text-gray-600">
              Secure institutional data and manage regular backups.
            </p>
          </div>

          {/* Card 10 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Communication Tools</h3>
            <p className="text-gray-600">
              Send messages to staff, students, and parents institution-wide.
            </p>
          </div>

          {/* Card 11 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Fee & Payment Management</h3>
            <p className="text-gray-600">
              Oversee fee structures, dues, payments, and receipts.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500">
          © 2025 Smart Education | Institution Dashboard
        </footer>
      </main>
    </div>
  );
}

export default AdminDashboard;