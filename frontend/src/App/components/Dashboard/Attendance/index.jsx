import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Attendance() {
  const [attend, setAttend] = useState([]);
  const [dates, setDates] = useState(null);
  const [modal, setModal] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [data, setData] = useState([]);
  const [modal2, setModal2] = useState(null);
  const [classroom, setClassroom] = useState({});
  const [kid, setKid] = useState([]);

  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/teachers/${teacher_id}`, config)
      .then((res) => {
        setClassroom(res.data.classroom);
        setKid(res.data.classroom.students);
      })
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, [teacher_id, config]);

  useEffect(() => {
    axios
      .get("/attendances", config)
      .then((res) => setAttend(res.data))
      .catch((error) => console.error("Error fetching attendance data:", error));
  }, [config]);

  const takeAttendance = async (date) => {
    setModal2(false);
    try {
      const { data } = await axios.get("/attendances");
      const existingAttendance = data.filter((item) => item.date === date);

      if (existingAttendance.length === 0) {
        const attendanceList = kid.map((student, index) => (
          <li
            key={index}
            className="border m-2 grid grid-cols-3 rounded-lg p-5 shadow-md hover:shadow-lg"
          >
            <span className="font-medium text-gray-700">{`${student.first_name} ${student.second_name}`}</span>
            <button
              onClick={(e) => handleAttendance(e, student, "Present")}
              className="outline outline-1 text-blue-600 hover:text-white hover:bg-blue-600 px-3 h-10 rounded-md"
            >
              Present
            </button>
            <button
              onClick={(e) => handleAttendance(e, student, "Absent")}
              className="outline outline-1 text-red-600 hover:text-white hover:bg-red-600 px-3 h-10 rounded-md"
            >
              Absent
            </button>
          </li>
        ));
        setData(attendanceList);
      } else {
        setData("Attendance already taken for this date.");
      }
    } catch (error) {
      console.error("Error taking attendance:", error);
    }
  };

  const handleAttendance = (e, student, status) => {
    const attendanceData = {
      classroom_id: classroom.id,
      student_id: student.id,
      student_name: student.first_name,
      status,
      date: dates,
    };

    e.target.parentElement.style.display = "none";
    axios
      .post("/attendances", attendanceData, config)
      .then((res) => console.log(res))
      .catch((error) => console.error("Error recording attendance:", error));
  };

  return (
    <div className="w-4/5 flex flex-col items-center m-auto">
      <div className="flex justify-end w-full mt-4 space-x-4">
        <button
          onClick={() => {
            setModal2(true);
            setModal3(false);
          }}
          className="rounded-lg shadow-md h-10 px-4 outline outline-1 text-blue-600 hover:text-white hover:bg-blue-600"
        >
          Take Attendance
        </button>
        <button
          onClick={() => {
            setModal3(true);
            setModal2(false);
          }}
          className="rounded-lg shadow-md h-10 px-4 outline outline-1 text-blue-600 hover:text-white hover:bg-blue-600"
        >
          View Attendance
        </button>
      </div>

      {modal3 && (
        <div className="flex flex-col items-center mt-8 p-6 w-full max-w-lg">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            Select a day to view its attendance
          </p>
          <input
            className="border rounded-lg h-10 w-full px-3 mb-4"
            type="date"
            onChange={(e) => setDates(e.target.value)}
          />
          <button
            onClick={() => setModal(true)}
            className="rounded-lg px-6 h-10 text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      )}

      {modal2 && (
        <div className="flex flex-col items-center mt-8 p-6 w-full max-w-lg">
          <p className="text-xl font-medium text-gray-700 mb-4">
            Enter the date for attendance
          </p>
          <input
            className="border rounded-lg h-10 w-full px-3 mb-4"
            type="date"
            onChange={(e) => setDates(e.target.value)}
          />
          <button
            onClick={() => takeAttendance(dates)}
            className="rounded-lg px-6 h-10 text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      )}

      <ul className="mt-8 w-full">{data}</ul>

      {modal && (
        <li className="border m-2 p-5 rounded-lg shadow-md hover:shadow-lg">
          <p>
            Attendance for date <strong>{dates}</strong> — click below to view
            more details.
          </p>
          <Link
            to={`${dates}`}
            className="float-right rounded-lg border px-6 py-1 outline outline-1 text-blue-600 hover:text-white hover:bg-blue-600"
          >
            View
          </Link>
        </li>
      )}
    </div>
  );
}

export default Attendance;
