import React from "react";
import icon from "./icon.svg";
import img from "./img1.svg";

function Welcome() {
  return (
    <div className="h-full flex flex-col bg-black text-white">
      {/* Header Section */}
      <header className="text-center my-6 px-4">
        <h1 className="text-4xl text-blue-600 font-semibold">Teacher Dashboard</h1>
        <p className="mt-2 text-lg text-gray-400">Welcome to your management portal</p>
      </header>

      {/* Hero Section */}
      <div className="h-72 m-auto w-11/12 md:w-3/4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-between p-8 shadow-xl">
        <div className="text-white w-1/2">
          <h2 className="text-4xl font-bold">Welcome, Teacher!</h2>
          <p className="mt-2 text-gray-200">You're all set to manage your classroom. Let's get started!</p>
        </div>
        <div className="bg-white rounded-full h-32 w-32 md:h-40 md:w-40 flex justify-center items-center shadow-lg">
          <img src={icon} alt="teacher icon" className="w-20 h-20 md:w-24 md:h-24" />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl text-blue-600 font-semibold">Total Classes</h3>
          <p className="text-2xl text-gray-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl text-blue-600 font-semibold">Attendance Today</h3>
          <p className="text-2xl text-gray-600 mt-2">98%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl text-blue-600 font-semibold">Parents Connected</h3>
          <p className="text-2xl text-gray-600 mt-2">56</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl text-blue-600 font-semibold">Upcoming Events</h3>
          <p className="text-2xl text-gray-600 mt-2">3</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <section className="mt-12 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-blue-600">Recent Activities</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all ease-in-out duration-300 transform hover:scale-105">
            View All
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-blue-600 font-semibold">Class 1: Math - Attendance</h4>
            <p className="text-gray-600 mt-2 text-sm">Marked attendance for 24 students.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-blue-600 font-semibold">Class 2: Science - Homework</h4>
            <p className="text-gray-600 mt-2 text-sm">Graded homework submissions for 18 students.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-blue-600 font-semibold">Parent Meeting</h4>
            <p className="text-gray-600 mt-2 text-sm">Scheduled parent meeting for next week.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
