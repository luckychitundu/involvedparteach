import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleAttendance() {
  const [allAttendance, setAllAttendance] = useState([]);
  const { date } = useParams();
  const token = localStorage.getItem("teacherToken");
  const id = localStorage.getItem("teacher");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/teachers/${id}`, config)
      .then((res) => {
        const attendanceForDate = res.data.classroom.attendances.filter(
          (data) => data.date === date
        );
        setAllAttendance(attendanceForDate);
      })
      .catch((error) => console.error("Error fetching attendance:", error));
  }, [id, date, config]);

  return (
    <div className="mt-10 px-6">
      <h1 className="mb-6 text-center text-2xl font-extrabold text-gray-800">
        Student Attendance for {date}
      </h1>
      {allAttendance.length < 1 ? (
        <div className="text-center text-lg text-gray-600">
          No attendance records for this date.
        </div>
      ) : (
        <ul className="mx-auto w-full max-w-4xl space-y-4">
          {allAttendance.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition hover:shadow-lg"
            >
              <span className="font-medium text-gray-700">{i + 1}</span>
              <span className="text-gray-800">{item.student_name}</span>
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item.status === "Present"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SingleAttendance;
