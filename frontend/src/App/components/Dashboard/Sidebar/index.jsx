import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("teacherToken");
    localStorage.removeItem("teacher");
    navigate("/login");
  }

  return (
    <div className="sm:flex flex-col sm:block hidden justify-between h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      {/* Logo */}
      <div className="text-center mt-5">
        <h1 className="text-4xl font-extrabold text-blue-400">InvolvEd</h1>
      </div>

      <div className="mt-10">
        {/* Sidebar Links */}
        {[
          { path: "", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
          { path: "classes", label: "Classes", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
          { path: "attendance", label: "Attendance", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
          { path: "parents", label: "Parents", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
          { path: "kids_list", label: "KidList", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
          { path: "discipline", label: "Discipline", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" },
          { path: "profile", label: "Profile", icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className="hover:bg-blue-700 focus:underline focus:decoration-white focus:text-white text-gray-300 flex items-center text-xl h-14 rounded-md p-3 m-2 transition-all"
          >
            <svg
              className="w-6 h-6 mr-2 text-blue-300 group-hover:text-white transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Logout Section */}
      <div className="mt-auto">
        <hr className="h-1 m-4 bg-blue-700" />
        <div
          onClick={handleLogout}
          className="hover:bg-blue-700 text-gray-300 flex items-center text-xl h-14 rounded-md p-3 m-2 cursor-pointer transition-all"
        >
          <svg
            className="w-6 h-6 mr-2 text-blue-600 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
